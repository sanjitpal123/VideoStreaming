import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QueryDataFetch from "../Services/FetchQueryData";
import UploadedTimeCalculate from "../utils/TimeDisplay";
import YoutubeSkeleton from "../Loading/Loading"; // Ensure path is correct

function SearchResultDisplay() {
  const { Query } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState(null);

  // Fetch data for the initial load or additional pages
  const fetchData = async (newPage) => {
    setLoading(true);
    try {
      const response = await QueryDataFetch(Query, newPage);
      const processedData = UploadedTimeCalculate(response);
      setResults((prevResults) =>
        newPage === 1 ? processedData : [...prevResults, ...processedData]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch when Query changes
  useEffect(() => {
    setPage(1);
    fetchData(1);
  }, [Query]);

  // Fetch additional data when page updates
  useEffect(() => {
    if (page > 1) fetchData(page);
  }, [page]);

  // Infinite scroll logic to increase page number
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight - 5 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // Navigation function
  const handleNavigation = (item) => {
    const videoId = item.id.videoId;
    const channelId = item.snippet.channelId;
    navigate(`/Video/${videoId}/${channelId}`);
  };

  // Hover functions
  const handleHover = (index) => setHover(index);
  const handleMouseOut = () => setHover(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 lg:ml-[15%] md:w-[95%] md:ml-[3%] lg:w-[85%] w-full justify-center bg-gray-900 text-white p-6">
      {loading && results.length === 0 ? (
        <YoutubeSkeleton />
      ) : results.length > 0 ? (
        results.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer p-2 m-1"
            onMouseOver={() => handleHover(index)}
            onMouseOut={handleMouseOut}
          >
            <div className="relative h-50">
              <img
                src={item.snippet.thumbnails.high.url}
                alt="Video thumbnail"
                className="w-full h-48 object-cover rounded-lg"
              />
              {hover === index && (
                <div className="w-full absolute top-0 h-full bg-black opacity-85 flex justify-center items-center">
                  <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center opacity-100">
                    <i className="fa-solid fa-play text-pink-400 text-2xl"></i>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                {item.snippet.title.slice(0, 60) +
                  (item.snippet.title.length > 60 ? "..." : "")}
              </h3>
              <p className="text-gray-400 text-sm mb-1">
                {item.snippet.channelTitle}
              </p>
              <p className="text-gray-500 text-xs">{item.timeAgo}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 mt-2">No data available.</p>
      )}
    </div>
  );
}

export default SearchResultDisplay;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FetchHomePageData from "../../Services/FetchHomeData";
import UploadedTimeCalculate from "../../utils/TimeDisplay";

function HomePageDataDisplay() {
  const Navigator = useNavigate();
  const [Data, SetData] = useState([]);
  const SideBarClickedText = useSelector((state) => state.sidebar.clicked);
  const [Page, SetPage] = useState(1);
  const [Loading, SetLoading] = useState(false);

  useEffect(() => {
    Fetching();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight - 5 &&
        !Loading
      ) {
        SetPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Loading]);

  useEffect(() => {
    if (Page > 1) {
      FetchMoreData();
    }
  }, [Page]);

  async function FetchMoreData() {
    SetLoading(true);
    try {
      const response = await FetchHomePageData(Page);
      const processedData = UploadedTimeCalculate(response);
      SetData((prevData) => [...prevData, ...processedData]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      SetLoading(false);
    }
  }

  async function Fetching() {
    try {
      const response = await FetchHomePageData(Page);
      const processedData = UploadedTimeCalculate(response);
      SetData(processedData);
    } catch (error) {
      console.error("Error fetching home page data:", error);
    }
  }

  function RoutingTovideo(id, ChannelId) {
    Navigator(`/Video/${id}/${ChannelId}`);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 lg:ml-[15%] md:w-[95%]  md:ml-[3%] lg:w-[85%] w-full justify-center bg-gray-900 text-white p-6">
      {Data.length > 0 ? (
        Data.map((Item, index) => (
          <div
            onClick={() => RoutingTovideo(Item.id, Item.snippet.channelId)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer p-2 m-1"
            key={index}
          >
            <div>
              <img
                src={Item.snippet.thumbnails.high.url}
                alt="Video thumbnail"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                {Item.snippet.title?.slice(0, 60) +
                  (Item.snippet.title?.length > 60 ? "..." : "")}
              </h3>
              <p className="text-gray-400 text-sm mb-1">
                {Item.snippet.channelTitle}
              </p>
              <p className="text-gray-500 text-xs">{Item.timeAgo}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 mt-2">No data available.</p>
      )}
    </div>
  );
}

export default HomePageDataDisplay;

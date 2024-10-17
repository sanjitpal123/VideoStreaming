import { useParams } from "react-router-dom";
import FetchShorts from "../Services/Fetchshorts";
import { useQuery } from "react-query";
import FetchHomePageDataNormal from "../Services/FetchNormal";
import { useNavigate } from "react-router-dom";
import FetchChannelDeatils from "../Services/FetchChanneldetails";
import { useState } from "react";

function VideoDisplay() {
  const Navigator = useNavigate();
  const { videoId } = useParams(); // Retrieve videoId
  const [channeldata, setChannelData] = useState(null);

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["Homepage"],
    queryFn: FetchHomePageDataNormal,
  });

  async function Fetch(id) {
    try {
      const data = await FetchChannelDeatils(id);
      console.log("channeldata", data);
      setChannelData(data);
    } catch (error) {
      console.log(error);
    }
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading video.</p>;

  function RoutingTovideo(id, ChannelId) {
    Navigator(`/Video/${id}/${ChannelId}`);
    Fetch(ChannelId);
  }

  const defaultThumbnail = channeldata?.[0]?.snippet?.thumbnails?.default?.url;

  console.log("dfd", defaultThumbnail);

  return (
    <div className=" w-full  lg:ml-[16%] xl:w-[83%] xl:ml-[16%] xl:flex min-h-[100vh] mt-20 gap-8">
      {/* Video Display Section */}
      <div className="w-[100%] xl:w-[80%] md:w-[100%] flex justify-center items-center  mt-10  h-[50vh] sm:h-[90vh]">
        <iframe
          src={videoUrl}
          className="w-[90%]   h-[70%] lg:h-[70%] cursor-pointer rounded-lg shadow-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Channel Details Section */}
       
      </div>

      {/* Recommended Videos Section */}
      <div className="xl:w-1/3  w-full  overflow-hidden h-[100vh] overflow-y-scroll p-4 md:p-7 bg-gray-900 rounded-lg shadow-lg md:mt-0">
        <h2 className="text-lg font-semibold mb-4 text-white">For You</h2>
        <div className="space-y-4">
          {data.map((item) => (
            <div
              className="cursor-pointer flex items-start space-x-4 bg-gray-50 hover:bg-red-300 hover:text-white p-2 rounded-md transition duration-200 ease-in shadow-md"
              key={item.id}
              onClick={() => RoutingTovideo(item.id, item.snippet.channelId)}
            >
              <img
                src={item.snippet.thumbnails.default.url}
                alt="thumbnail"
                className="w-24 h-16 object-cover rounded-lg shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-700">
                  {item.snippet.title.slice(0, 30)}...
                </h3>
                <p className="text-xs text-gray-500">
                  {item.snippet.channelTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoDisplay;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import QueryDataFetch from "../Services/FetchQueryData";
import UploadedTimeCalculate from "../utils/TimeDisplay";
import { useNavigate } from "react-router-dom";
import YoutubeSkeleton from "../Loading/Loading"; // Make sure this is the correct path

function SearchResultDisplay() {
  const { Query } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
    setPage(1);
  }, [Query]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight - 20 &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    if (page > 1) {
      fetchMoreData();
    }
  }, [page]);

  async function fetchMoreData() {
    setLoading(true);
    try {
      const response = await QueryDataFetch(page);
      const processedData = UploadedTimeCalculate(response);
      setResults((prevData) => [...prevData, ...processedData]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await QueryDataFetch(Query);
      const processedData = UploadedTimeCalculate(response);
      setResults(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  function handle(item) {
    const videoId = item.id.videoId;
    const channelId = item.snippet.channelId;
    navigate(`/Video/${videoId}/${channelId}`);
  }

  return (
    <div className="flex flex-wrap gap-6 mt-[70px] w-full lg:ml-[15%] lg:w-[80%] justify-center">
      {loading && results.length === 0 ? (
        <YoutubeSkeleton />
      ) : results.length > 0 ? (
        results.map((item, index) => (
          <Card
            sx={{
              maxWidth: "360px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#111827",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
            key={index}
            onClick={() => handle(item)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                sx={{ objectFit: "cover" }}
                image={item.snippet.thumbnails.high.url}
                alt="Video thumbnail"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://example.com/default-fallback.jpg";
                }}
              />
              <CardContent sx={{ padding: "12px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    lineHeight: "1.3",
                    color: "#FFFFFF",
                    mb: 1,
                  }}
                >
                  {item.snippet.title?.slice(0, 60) +
                    (item.snippet.title?.length > 60 ? "..." : "")}
                </Typography>

                {/* Conditionally hide elements on small devices */}
                <div className="hidden md:block">
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "14px", color: "#E5E7EB", mb: 1 }}
                  >
                    {item.snippet.channelTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "12px", color: "#9CA3AF" }}
                  >
                    {item.timeAgo}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>
          No data available.
        </Typography>
      )}
    </div>
  );
}

export default SearchResultDisplay;

import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import FetchHomePageData from "../../Services/FetchHomeData";
import QueryDataFetch from "../../Services/FetchQueryData";
import { useSelector } from "react-redux";
import UploadedTimeCalculate from "../../utils/TimeDisplay";
function HomePageDataDisplay() {
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

  return (
    <div className="flex flex-wrap gap-6 mt-20 lg:ml-[15%] md:w-[85%] md:ml-[15%] lg:w-[85%] w-full justify-center">
      {Data.length > 0 ? (
        Data.map((Item, index) => (
          <Card
            sx={{
              maxWidth: "360px",
              boxShadow: "none",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
            key={index}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                sx={{ objectFit: "cover" }}
                image={Item.snippet.thumbnails.high.url}
                alt="Video thumbnail"
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
                    color: "#333",
                    mb: 1,
                  }}
                >
                  {Item.snippet.title?.slice(0, 60) +
                    (Item.snippet.title?.length > 60 ? "..." : "")}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "14px", mb: 1 }}
                >
                  {Item.snippet.channelTitle}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "12px" }}
                >
                  {Item.timeAgo}
                </Typography>
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

export default HomePageDataDisplay;

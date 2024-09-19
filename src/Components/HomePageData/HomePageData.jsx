import { useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import FetchHomePageData from "../../Services/FetchHomeData";
import FetchingSideBarClickedData from "../../Services/FetchingSidbarData";
import { useSelector } from "react-redux";

function HomePageDataDisplay() {
  const [Data, SetData] = useState([]);
  const SideBarClickedText = useSelector((state) => state.sidebar.clicked);

  useEffect(() => {
    if (SideBarClickedText === 'Home') {
      Fetching();
    } else {
      FetchingSideBarData();
    }
  }, [SideBarClickedText]);


// called below sidebar clicked data 
  async function FetchingSideBarData() {
    try {
      const response = await FetchingSideBarClickedData(SideBarClickedText);
      const updatedData = response.items.map((item) => ({
        ...item,
        timeAgo: calculateTimeAgo(item.snippet.publishedAt),
      }));
      SetData(updatedData);
    } catch (error) {
      console.error("Error fetching sidebar data:", error);
    }
  }
  // Sidebar called data end here

// Calling by default data or home data 
  async function Fetching() {
    try {
      const response = await FetchHomePageData();
      const updatedData = response.items.map((item) => ({
        ...item,
        timeAgo: calculateTimeAgo(item.snippet.publishedAt),
      }));
      SetData(updatedData);
    } catch (error) {
      console.error("Error fetching home page data:", error);
    }
  }
  // By default data or home data function called is end here

  // Calcualating time , means when the video was posted 
  function calculateTimeAgo(date) {
    let newdate = new Date(date);
    let currentTime = new Date();

    let videoPostedYear = newdate.getFullYear();
    let videoPostedMonth = newdate.getMonth() + 1;
    let videoPostedDay = newdate.getDate();

    let currentYear = currentTime.getFullYear();
    let currentMonth = currentTime.getMonth() + 1;
    let currentDay = currentTime.getDate();

    if (currentYear - videoPostedYear >= 1) {
      return currentYear - videoPostedYear + " year(s) ago";
    } else if (currentMonth - videoPostedMonth >= 1) {
      return currentMonth - videoPostedMonth + " month(s) ago";
    } else if (currentDay - videoPostedDay >= 1) {
      return currentDay - videoPostedDay + " day(s) ago";
    } else {
      return "Today";
    }
  }
  // calculation is end here 

  return (
    <div className="flex flex-wrap gap-6 mt-[70px] ml-[15%] w-[80%] justify-center">
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
                  {Item.snippet.title?.slice(0, 60) + (Item.snippet.title?.length > 60 ? "..." : "")}
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

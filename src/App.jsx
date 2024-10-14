import SimpleCollapse from "./Components/Demo/Demo";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedCom from "./Shared/SharedLayout";
import HomePage from "./Components/HomePageData/HomePageComponent";
import SearchResultDisplay from "./SearchResult/SearchResults";
import VideoDisplay from "./VideoDisplay/vidoedisplay";

function App() {
  const Clicked = useSelector((state) => state.clickedCheck.clicked);
  console.log("fdf", Clicked);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedCom />}>
            <Route index element={<HomePage />} /> 
            <Route
              path="Search-Query/:Query"
              element={
                <SearchResultDisplay/>
              }
            />
            <Route  path="Video/:videoId/:channelId" element={<VideoDisplay/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

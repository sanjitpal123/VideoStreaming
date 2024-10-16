import SimpleCollapse from "./Components/Demo/Demo";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedCom from "./Shared/SharedLayout";
import HomePage from "./Components/HomePageData/HomePageComponent";
import { lazy, Suspense } from "react";

import MyLoader from "./Loading/Loading";

// Lazy-loaded components
const SearchResultDisplay = lazy(() => import("./SearchResult/SearchResults"));
const VideoDisplay = lazy(() => import("./VideoDisplay/vidoedisplay"));
const Home = lazy(() => import("./Components/HomePageData/HomePageData"));

function App() {
  const Clicked = useSelector((state) => state.clickedCheck.clicked);
  console.log("Clicked state:", Clicked);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedCom />}>
            <Route index element={
              <Suspense fallback={<MyLoader/>}> <HomePage /></Suspense>
            }/>
            <Route
              path="Search-Query/:Query"
              element={
                <Suspense fallback={<MyLoader/>}>
                  <SearchResultDisplay />
                </Suspense>
              }
            />
            <Route
              path="Video/:videoId/:channelId"
              element={
                <Suspense fallback={<MyLoader/>}>
                  <VideoDisplay />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

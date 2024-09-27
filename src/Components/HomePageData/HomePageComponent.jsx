import Navbar from "../Header/Navbar";
import SideBar from "../SideBar/SideBar";
import HomePageDataDisplay from "./HomePageData";
function HomePage() {
    return (
        <>
            <Navbar />
            <div className="md:flex flex-col md:flex-row">
                <SideBar />
                <HomePageDataDisplay />
            </div>
        </>
    );
}

export default HomePage;

import { useDispatch } from 'react-redux';
import { setSideBarClickedValue } from '../../Redux/SideBarClicked'; // Named import

function SideBar() {
    const dispatch = useDispatch();

    return (
        <div className="w-full md:w-[15%] bg-white fixed mt-[60px] h-[100vh] border-r-2 shadow-md ">
            <div className="flex px-5 flex-col py-4 justify-center">
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('Home'))}>
                    <i className="fa-solid fa-house text-2xl"></i>
                    <span className="text-sm font-medium">Home</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('Games'))}>
                    <i className="fa-solid fa-gamepad text-2xl"></i>
                    <span className="text-sm font-medium">Games</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('Sports'))}>
                    <i className="fa-solid fa-volleyball text-2xl"></i>
                    <span className="text-sm font-medium">Sports</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('TV'))}>
                    <i className="fa-solid fa-tv text-2xl"></i>
                    <span className="text-sm font-medium">TV</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('Tech'))}>
                    <i className="fa-solid fa-microchip text-2xl"></i>
                    <span className="text-sm font-medium">Tech</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('Music'))}>
                    <i className="fa-solid fa-music text-2xl"></i>
                    <span className="text-sm font-medium">Music</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('Blog'))}>
                    <i className="fa-solid fa-blog text-2xl"></i>
                    <span className="text-sm font-medium">Blog</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200" onClick={() => dispatch(setSideBarClickedValue('News'))}>
                    <i className="fa-solid fa-newspaper text-2xl"></i>
                    <span className="text-sm font-medium">News</span>
                </a>
            </div>
        </div>
    );
}

export default SideBar;

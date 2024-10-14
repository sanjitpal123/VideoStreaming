import { useDispatch } from 'react-redux';
import { setSideBarClickedValue } from '../../Redux/SideBarClicked'; // Named import
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Import useState for toggle functionality

function SideBar() {
    const dispatch = useDispatch();
    const Navigator = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility on small screens

    function Navigatin(clicked) {
        if (clicked === 'Home') {
            Navigator('/');
        } else {
            Navigator(`/Search-Query/${clicked}`);
        }
        setIsOpen(false); // Close the sidebar after navigation
    }

    // Toggle sidebar for small screens
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Button to toggle sidebar on small screens */}
            <button 
                className="md:hidden fixed top-1 left-2 z-50 bg-gray-800 text-white p-2 rounded shadow-lg"
                onClick={toggleSidebar}
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Sidebar */}
            <div className={`w-[75%] xl:block hidden md:w-[15%] bg-gray-900 lg:mt-8 text-white fixed top-[50px] md:h-[100vh] h-auto border-r-2 shadow-lg z-40 transition-transform transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0`}>
                <div className="flex px-5 flex-col py-4 justify-center">
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('Home')}>
                        <i className="fa-solid fa-house text-2xl"></i>
                        <span className="text-sm font-medium">Home</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('Games')}>
                        <i className="fa-solid fa-gamepad text-2xl"></i>
                        <span className="text-sm font-medium">Games</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('Sports')}>
                        <i className="fa-solid fa-volleyball text-2xl"></i>
                        <span className="text-sm font-medium">Sports</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('TV')}>
                        <i className="fa-solid fa-tv text-2xl"></i>
                        <span className="text-sm font-medium">TV</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('Tech')}>
                        <i className="fa-solid fa-microchip text-2xl"></i>
                        <span className="text-sm font-medium">Tech</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('Music')}>
                        <i className="fa-solid fa-music text-2xl"></i>
                        <span className="text-sm font-medium">Music</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('Blog')}>
                        <i className="fa-solid fa-blog text-2xl"></i>
                        <span className="text-sm font-medium">Blog</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-700 hover:text-white transition-all duration-300" onClick={() => Navigatin('News')}>
                        <i className="fa-solid fa-newspaper text-2xl"></i>
                        <span className="text-sm font-medium">News</span>
                    </a>
                </div>
            </div>

            {/* Overlay to close sidebar when clicking outside (on small screens) */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}

export default SideBar;

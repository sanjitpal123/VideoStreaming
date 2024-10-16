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
           
            <button 
                className="lg:hidden fixed top-2 left-2 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
                onClick={toggleSidebar}
            >
                <i className="fa-solid fa-bars text-xl"></i>
            </button>

          
            <div className={`fixed top-[79px] left-0 h-full bg-gray-900 border-r-2 text-white w-[75%] md:w-[20%] lg:w-[15%] p-5 z-40 transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}>
                <div className="flex flex-col space-y-6 ">
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('Home')}>
                        <i className="fa-solid fa-house text-xl"></i>
                        <span className="text-lg font-medium">Home</span>
                    </a>
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('Games')}>
                        <i className="fa-solid fa-gamepad text-xl"></i>
                        <span className="text-lg font-medium">Games</span>
                    </a>
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('Sports')}>
                        <i className="fa-solid fa-volleyball text-xl"></i>
                        <span className="text-lg font-medium">Sports</span>
                    </a>
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('TV')}>
                        <i className="fa-solid fa-tv text-xl"></i>
                        <span className="text-lg font-medium">TV</span>
                    </a>
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('Tech')}>
                        <i className="fa-solid fa-microchip text-xl"></i>
                        <span className="text-lg font-medium">Tech</span>
                    </a>
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('Music')}>
                        <i className="fa-solid fa-music text-xl"></i>
                        <span className="text-lg font-medium">Music</span>
                    </a>
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('Blog')}>
                        <i className="fa-solid fa-blog text-xl"></i>
                        <span className="text-lg font-medium">Blog</span>
                    </a>
                    <a href="" className="flex items-center gap-3 p-3 hover:bg-gray-700 hover:text-white transition-all duration-300 rounded-lg" onClick={() => Navigatin('News')}>
                        <i className="fa-solid fa-newspaper text-xl"></i>
                        <span className="text-lg font-medium">News</span>
                    </a>
                </div>
            </div>

        
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-60 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}

export default SideBar;

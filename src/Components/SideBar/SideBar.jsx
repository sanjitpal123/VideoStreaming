function SideBar()
{
return (
    <div className="w-full md:w-[15%] bg-white fixed h-[100vh] shadow-md">
    <div className="flex px-5 flex-col py-4 justify-center">
    
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-house text-2xl"></i>
        <span className="text-sm font-medium">Home</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-gamepad text-2xl"></i>
        <span className="text-sm font-medium">Games</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-car-side text-2xl"></i>
        <span className="text-sm font-medium">Vehicles</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-volleyball text-2xl"></i>
        <span className="text-sm font-medium">Sports</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-tv text-2xl"></i>
        <span className="text-sm font-medium">TV</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-microchip text-2xl"></i>
        <span className="text-sm font-medium">Tech</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-music text-2xl"></i>
        <span className="text-sm font-medium">Music</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-blog text-2xl"></i>
        <span className="text-sm font-medium">Blog</span>
      </a>
      <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-200">
        <i className="fa-solid fa-newspaper text-2xl"></i>
        <span className="text-sm font-medium">News</span>
      </a>
    </div>
  </div>
  
)

}
export default SideBar;
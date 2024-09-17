import SearchIcon from "../../assets/Search.png";

function SearchBar() {
  return (
    <div className="w-[40%] md:w-[30%] mt-5 h-[30px] border-2 flex border-black items-center justify-between rounded-[20px]">
      <input 
        type='text' 
        className="h-full outline-none rounded-[20px] w-[90%] px-1" 
        placeholder="Search..."
      />
      <div className="h-[80%]">
        <img src={SearchIcon} className="h-[90%] px-2" alt="Search" />
      </div>
    </div>
  );
}

export default SearchBar;

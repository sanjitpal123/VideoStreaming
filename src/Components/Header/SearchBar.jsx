import { useEffect, useState } from "react";
import SearchIcon from "../../assets/Search.png";
import { useDispatch, useSelector } from "react-redux";

import useDebounce from "../../utils/Deboucing";
import GetQuery from "../../Redux/QuerySlice"
import './SearchBarCss.css';
import { useNavigate } from "react-router-dom";


function SearchBar() {
  const Navigator=useNavigate()
  const dispatch = useDispatch();
  const GettingQuery = useSelector((state) => state.query.Query); // Getting initial query from Redux
  const [query, setQuery] = useState(GettingQuery || ""); // Set initial query or empty string
  const [SearchQuery,SetSearchQuery]=useState('')
  const response = useDebounce(query); 
  const [Response, SetResponse]=useState([])
  const [Loading, SetLoading]=useState(null);

  console.log(SearchQuery)
  useEffect(()=>{
   SetResponse(response)
  },[response])

  

  function handleChange(e) {
    if(e.key==='Enter')
    {
      Navigator(`/Search-Query/${e.target.value}`)
          SetResponse([])

    }
    setQuery(e.target.value);
    dispatch(GetQuery(e.target.value));
 
  }
  console.log(Response)
 function Navigating(Query)
 {
  Navigator(`/Search-Query/${Query}`);

  SetResponse([])
 }
 console.log('length',response.length)

  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Search bar container */}
      <div className="w-[80%]  sm:mr-[-100px] md:mr-[-200px] md:w-[60%] lg:w-[50%] h-[40px] sm:h-[45px] flex items-center bg-white border border-gray-300 rounded-full shadow-lg p-1">
        <input
          type="text"
          className="h-full w-full px-4 text-gray-800 text-sm md:text-base outline-none rounded-l-full"
          placeholder="Search YouTube..."
          value={query} // Controlled input
          onChange={handleChange} // Update query on change
          onKeyDown={handleChange}
        />
        <button className="h-full px-2 sm:px-4 flex items-center justify-center rounded-r-full bg-gray-100 hover:bg-gray-200 transition duration-200" onClick={()=>Navigating(query)}>
          <img src={SearchIcon} className="h-[50%] sm:h-[65%]" alt="Search"  />
        </button>
      </div>

      {/* Display search results */}
      {query.length> 0 && (
        <div className="w-[90vw] ml-[-100px] md:ml-[200px] mt-[60px] md:w-[60%] lg:w-[50%]  absolute z-10 bg-white shadow-lg rounded-lg max-h-[350px] overflow-y-scroll no-scrollbar element-with-scroll">
          {Response.map((item) => (
            <div
              key={item.id.videoId}
              onClick={()=>Navigating(item.snippet.title)}
              className="hover:bg-gray-100 cursor-pointer border-b border-gray-200 p-2 flex items-center space-x-4" >
             
              <div>
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {`${item.snippet.title.slice(0,50)}`}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

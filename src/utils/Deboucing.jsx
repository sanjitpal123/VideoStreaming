import { useEffect, useState } from "react";
import { Api_Key } from "../Helpers/ApiKey";

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search"; 

function useDebounce(query) {
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [response, setResponse] = useState([]);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); 

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

 
  useEffect(() => {
    async function fetchResults() {
      if (debouncedQuery) {
        try {
          const res = await fetch(
            `${YOUTUBE_API_URL}?part=snippet&q=${debouncedQuery}&key=${Api_Key}&maxResults=10`
          );
          const data = await res.json();
          setResponse(data.items || []); 
        } catch (error) {
          console.error("Error fetching YouTube data:", error);
        }
      }
    }

    fetchResults();
  }, [debouncedQuery]);

  return response; 
}

export default useDebounce;

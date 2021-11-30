import React, { useState, useCallback, useEffect} from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../util/BackendUrl';


const useFetch = (page) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const sendQuery = useCallback( async () => {
      const URL = `${BACKEND_URL}/PLEA-STREET/board/all?page=${page}`;
      await axios.get(URL).then(response =>{
        setList((prev) => [...new Set([...prev, ...response.data.content])]); 
        setHasMore(response.data.content.length > 0); 
        setIsLoading(false)
      })
}, [page]);



useEffect(() => {
    sendQuery();
}, [sendQuery, page]); 

return {hasMore, list, isLoading};
};
export default useFetch;

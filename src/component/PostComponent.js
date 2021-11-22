import React, { useState, useEffect, useCallback } from "react";

export const API_BASE_URL = "http://localhost:8080";
export const ACCESS_TOKEN = "accessToken";

export const request = (options) => {
    const headers = new Headers({
      "Content-Type": "application/json",
    });
  
    if (localStorage.getItem(ACCESS_TOKEN)) {
      headers.append(
        "Authorization",
        "Bearer " + localStorage.getItem(ACCESS_TOKEN)
      );
    }
  
    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);
  
    return fetch(options.url, options).then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
  };


const useFetch = (page) => {

    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const sendQuery = useCallback(async () => {
        const URL = `${API_BASE_URL}/post/allposts/?page=${page}`;
    
        try {
            setIsLoading(true);
    
            const response = await request({
                url :URL,
                method: "GET"
            })
            console.log(response.content);
    
            if (!response){
                throw new Error("Post를 불러올 수 없습니다");
            }
    
             setList((prev) => [...new Set([...prev, ...response.content])]); //나는 content로 들어옴
             setHasMore(response.content.length > 0) //데이터가 더 남아있으면
             setIsLoading(false);
        } catch(e) {
            throw new Error(`에러!! ${e.message}`)
        }
    }, [page]);
    
    useEffect(() => {
        sendQuery();
    }, [sendQuery, page]); 

return {
    hasMore, list, isLoading}
};
export default useFetch;

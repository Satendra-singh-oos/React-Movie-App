import React, { useState, useEffect } from "react";

export const API_URL =`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {

    const [isLoading,setIsLoading] =useState(true)
    const [movie,setMovie]=useState(null)
    const [isError, setIsError]=useState({show:"false",msg:""})

    const getMovies = async(url)=>{
        setIsLoading(true)
        try {
         const res=await fetch(url)
         const data =await res.json();
 
        // console.log(data);
 
         if(data.Response === "True"){
             setIsLoading(false)
             setMovie(data.Search || data)
             setIsError({show:"false",msg:""})
         }else {
             setIsError({
                 show:"true",
                 msg:data.error
             })
         }
 
        } catch (error) {
         console.log(error);
        }
     }


     useEffect(()=>{
        let timer = setTimeout(()=>{
            getMovies(`${API_URL}&s=${apiParams}`);
        }, 400);

        return () =>clearTimeout(timer)

     },[apiParams])
  
     return { isLoading, isError, movie };
     
}


export default useFetch;
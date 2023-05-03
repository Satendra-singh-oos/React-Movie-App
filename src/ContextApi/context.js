import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import useFetch from './useFetch.js';



//First create context
const AppContext = React.createContext()


//second we need a Provider 

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("Iron Man");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};



// we created a custom hook to make easy in importing the context in other files

const useGlobalContext = () => {
    return useContext(AppContext);
  };



export {AppContext,AppProvider,useGlobalContext}
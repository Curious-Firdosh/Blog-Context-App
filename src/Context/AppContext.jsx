
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import { Navigate, useNavigate } from "react-router-dom";


//  STEP-1 ❤️❤️❤️❤️ Created A Context and to use in other file use Export 
 export const AppContext = createContext();

// Provider THat is used to provide the data to the other component
 export default function AppContextProvider ({children}){

    const[loading,setLoading] = useState(false) // set loading
    const[posts,setPost] = useState([])   // Post Kitne HAI
    const[page,SetPage] = useState(1)   // Current page
    const[totalPages , SetTotalpages] = useState(null) // Total pages
    const navigate = useNavigate()

// Data Filling [Through The Api ] data lana hai BlogPost MAI 

    async function fetchBlogPost(page = 1 , tag = null , category){
        setLoading(true)
       let Url = `${baseUrl}?page=${page}`
        // Yha url change hoga jab TAG Ayega url ke saath 😁😁 
        if(tag) {
            Url += `&tag=${tag}`
        }
      //Category aayega url ke sath 😊😊
        if(category) {
          Url += `&category=${category}`
        }

        try{
           const response = await fetch(Url);
           const data = await response.json();
           console.log(data);
           setPost(data.posts)
           SetPage(data.page)
           SetTotalpages(data.totalPages)
        }

       catch(error){
            alert("Error In Fetching Data From Api");
            setPost([])
            SetPage(1)
            SetTotalpages(null)
       }
       setLoading(false)
    }
    

    // It Is for handleing PREVIOUS or Next Button Click

    const PageHandler = (page) => {
      navigate({ search:`?page=${page}`})      
      SetPage(page);
            
    }

    //Value is used to provide the data to the other component basically [data pass karnege dusre Components main]
    const value = {
        
        loading,
        setLoading,
        posts,
        setPost,
        page,
        SetPage,
        totalPages,
        SetTotalpages,
        fetchBlogPost,
        PageHandler
    };
   

    // STEP-2 ✅✅✅✅❤️
    // Here The AppContext name will be change also the value object name is changed But syntext hamesha same rahega
    return <AppContext.Provider value={value}>
            {
               children
            }
       </AppContext.Provider>



}
import Header from "./Components/Header"
import Blogs from "./Components/Blogs"
import Pageniation from "./Components/Pageniation"
import { useContext } from "react"
import { AppContext } from "./Context/AppContext"
import { useEffect } from "react"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"
import Home from "./pages/Home"
import TagPage from "./pages/TagPage"
import CategoryePage from "./pages/CategoryPage"
import BlogPage from "./pages/BlogPage"



export default function App(){

    const{fetchBlogPost} = useContext(AppContext)
    const [searchParams , SetSearchParams] = useSearchParams();
    const location = useLocation()

    useEffect (() => {
      const page = searchParams.get("page") ?? 1 ;

      if(location.pathname.includes('tags')){
        // iska matlab ye tag  wala page show karna hai
        const tag = location.pathname.split('/').at(-1).replaceAll("-"," ")
        fetchBlogPost(Number(page),tag)
    }
      else if(location.pathname.includes('categories')){
        //iska matlab hai ki serch parameter main category gaya hai 
        const category = location.pathname.split('/').at(-1).replaceAll("-"," ")
        fetchBlogPost(Number(page),null,category)
    } 
      else{
        fetchBlogPost(Number(page))
      }
      // location.pathname ---> ye code meko jab .pathname change hoga to chalana hai
      // location.serach ----> jab page number change hoga tab ye code chalan hai 
    
    },[location.pathname,location.search])

    return(
        <Routes>
            {/* Here the :blogsId, oR Other is A Dynamic Parameter */}
            
            <Route path="/" element = {<Home/>}/>
            <Route path="/blog/:blogId" element = {<BlogPage/>}/>
            <Route path="/tags/:tag" element = {<TagPage/>}/>
            <Route path="/categories/:category" element = {<CategoryePage/>}/>
        
        
        
        </Routes>
    )
}
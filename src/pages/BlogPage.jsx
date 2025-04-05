import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { baseUrl } from "../baseUrl"
import App from "../App"
import { AppContext } from "../Context/AppContext"
import BlogDetail from "../Components/BlogDetail"
import Header from "../Components/Header"


export default function BlogPage(){

    const navigate = useNavigate()
    const[Blogs , SetBlogs] = useState(null)
    const[ReletedBlogs,SetReletedBlogs] = useState([])
    const location = useLocation();
    const blogId = location.pathname.split("/").at(-1).replaceAll("-" ," ")
    const{loading,setLoading} = useContext(AppContext)

    async function fetchRelatedBlogs(){

        let url = `${baseUrl}?blogId=${blogId}`;

        try{
            setLoading(true);
            const res = await fetch(url)
            const data = await res.json()
            
            SetBlogs(data.blog)
            SetReletedBlogs(data.relatedBlogs)
        }
        catch(error){
            console.log(error , "Error in Fetching The Api")
            SetBlogs(null);
            SetReletedBlogs([])
        }

        setLoading(false)

    }


    return(
        
        <div>
            <Header></Header>

            <div>
                <button onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
            
            
            {
                loading ? 
                (
                    <div>
                        <p>Loading....</p>
                    </div> 
                ) :
                
                Blogs ?
                // True  Case
                (
                    <div>
                        <BlogDetail currentBlog = {Blogs}/>
                        <h2>Related Blogs</h2>

                        {
                            ReletedBlogs.map((post) => (
                                <div key={post.id}>
                                    <BlogDetail post = {post}/>
                                </div>
                            ))
                        }
                    
                      </div>
                ) : 
                    // False Case
                    (
                        <div>
                            <h1>No Blog Found</h1>
                        </div>
                    )
                
                    

            }
        
        </div>


       
      )
            
}
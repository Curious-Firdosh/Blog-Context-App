import { useLocation, useNavigate } from "react-router-dom"
import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import Pageniation from "../Components/Pageniation";

export default function CategoryePage(){
    const Navigate = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/").at(-1).replaceAll("-" ," ")
    
    
    return(
        <div>
            <Header/>

            <div>
                <button onClick={() => Navigate(-1)}>
                    Back
                </button>

                <h2>
                    Blogs On <span>{category}</span>
                
                </h2> 
            </div>
             
            <Blogs/>
            <Pageniation/>
        </div>
    )
}
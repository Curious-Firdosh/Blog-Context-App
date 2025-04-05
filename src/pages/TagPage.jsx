import { useLocation, useNavigate } from "react-router-dom"
import Pageniation from "../Components/Pageniation"
import Header from "../Components/Header"
import Blogs from "../Components/Blogs"

export default function TagPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split('/').at(-1).replaceAll("-"," ")
    return(
        <div>
            <Header/>

            <div>
                <button onClick={() => navigate(-1)} >
                    Back
                </button>

                <h2>
                    Blogs Tagged <span>#{tag}</span>
                </h2>

            </div>

            <Blogs/>
            <Pageniation/>
        </div>
    )
}
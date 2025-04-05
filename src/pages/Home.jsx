import Blogs from "../Components/Blogs";
import Header from "../Components/Header";
import Pageniation from "../Components/Pageniation";

export default function Home(){
    return (
        <div>
            <Header />
            <div>
                <Blogs/>
                <Pageniation />
            </div>
        </div>
    )
}
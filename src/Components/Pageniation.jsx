import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export default function  Pageniation(){
    
    const{page,PageHandler,totalPages} = useContext(AppContext)
    
    return(
<div className="border-t w-full bg-white shadow-lg rounded fixed bottom-0">

    <div className="w-full  flex mx-auto text-lg justify-between max-w-[880px]    ">

          
            <div className="flex gap-4 mt-4 mb-4">
                {
                    page > 1 && 
                    <button
                    className="border border-black rounded-md py-1 px-4"
                    onClick={() => PageHandler(page-1)} > 
                        Previous
                    </button>   
                }

                {
                    page < totalPages && 
                    <button
                    className="border border-black py-1 rounded-md px-4"
                    onClick={() => PageHandler(page+1)}>
                        Next
                    </button>
                }
            </div>

            <p className="flex items-center mb-4 font-semibold gap-2">
                Page <span className="font-bold">{page}</span> of <span className="font-bold">{totalPages}</span>
            </p>



</div>
        </div>
    )
}
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import BlogDetail from './BlogDetail'


const Blogs = () => {
// STEP-3 CONSUMING THE DATA 
    const {loading,posts} = useContext(AppContext)
    
return (
    <div className='w-11/12 max-w-[870px] mx-auto mt-3 mb-24'>
      {
        loading ?

        (<Spinner/>) :
         
        (
          posts.length === 0  ?
          (
            <h1>No Post Found</h1>
          ):
          
          (
              posts.map((post) => (
                
                <BlogDetail key = {post.id} post = {post} />
              
              ))
          )
        )
      }
    </div>
  )

}

export default Blogs

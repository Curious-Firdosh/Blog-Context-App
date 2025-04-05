import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const BlogDetail = ({post}) => {
  
    return(
            <div>
                <NavLink to = {`/blog/${post.id}`}>
                    <span className='text-3xl font-extrabold'>{post.title}</span>
                </NavLink>
                <p>
                By 
                <span>{post.author}</span> On {" "}
                
                <NavLink to = {`/categories/${post.category.replaceAll("-" ," ")}`}>
                            <span className=' text-purple-500 text-2xl'>{post.category}</span>
                </NavLink>
              </p>

                <p>
                    Posted On {post.date}
                </p>

            <p> {post.content} </p>

            <div>
                {post.tags.map((tag,index) => (
                    <NavLink key = {index} to = {`/tags/${tag.replaceAll("-"," ")}`}>
                        <span className='font-semibold  text-blue-600'>`#{tag}`</span>
                    </NavLink>
                ))}
            </div>
                
        </div>
    )
}

export default BlogDetail

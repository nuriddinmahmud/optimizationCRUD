import React, { type Dispatch, type FC, type SetStateAction } from 'react'
import type { IBlog } from '../types';

interface Props {
  data: IBlog[]
  onDlelete: (id:number) => void
  setEditingItem: Dispatch<SetStateAction<IBlog | null>>
}

const BlogView:FC<Props>  = ({data, onDlelete, setEditingItem}) => {
    console.log("BlogView render");
    
  return (
    <div>
        {data?.map((blog:IBlog) => (
            <div key={blog.id}>
                <h3>{blog.value}</h3>
                <button onClick={() => onDlelete(blog.id)}>delete</button>
                <button onClick={() => setEditingItem(blog)}>update</button>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default React.memo(BlogView)
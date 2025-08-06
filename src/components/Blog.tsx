import React, { useCallback, useEffect, useState } from 'react'
import BlogCreate from './BlogCreate'
import BlogView from './BlogView'
import type { IBlog } from '../types'

const Blog = () => {
    const [data, setData] = useState<IBlog[]>(JSON.parse(localStorage.getItem("data") || '[]') || [])
    const [editingItem, setEditingItem] = useState<null | IBlog>(null)
    console.log("Blog render");

    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data    ))
    }, [data])

    const handleDelete = useCallback((id: number)=> {
        setData(prev => prev.filter((item) => item.id !== id))
    }, [setData])
  return (
    <div>
        <BlogCreate setData={setData} editingItem={editingItem} setEditingItem={setEditingItem}/>
        <BlogView onDlelete={handleDelete} setEditingItem={setEditingItem} data={data}/>
    </div>
  )
}

export default React.memo(Blog)
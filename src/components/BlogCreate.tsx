import React, { useEffect, useState, type Dispatch, type FC, type FormEvent, type SetStateAction } from 'react'
import type { IBlog } from '../types';

interface Props {
  setData: Dispatch<SetStateAction<IBlog[]>>
  editingItem: IBlog | null
  setEditingItem: Dispatch<SetStateAction<IBlog | null>>

}

const BlogCreate:FC<Props> = ({setData, editingItem, setEditingItem}) => {
  const [value, setValue] = useState("")
    console.log("BlogCreate render");

  useEffect(()=>{
    if(editingItem){
      setValue(editingItem.value)
    }
  }, [editingItem])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(editingItem){
      setData(prev => {
        return prev.map((item) => item.id === editingItem.id ? {...item, value} : item)
      })
      setEditingItem(null)
    }else{
      let newBlog: IBlog = {
        id: Date.now(),
        value
      }
      setData((prev)=> [...prev, newBlog])
    }
    setValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input required value={value} onChange={e => setValue(e.target.value)} type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default React.memo(BlogCreate)
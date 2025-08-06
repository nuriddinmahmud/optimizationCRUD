import React, { useState, type Dispatch, type FC, type SetStateAction } from 'react'

interface Props {
  title: string
  user: any
  handleInc: () => void
  setCount: Dispatch<SetStateAction<number>>
}

const Header:FC<Props> = ({handleInc}) => {
  console.log("header render");
    const [bool, setBool] = useState(true)
  return (
    <div>
      <h2>Header </h2>
        <button onClick={() => setBool(p => !p)}>turn  {bool ? "on" : "off"}</button>
        <button onClick={handleInc}>increment parent</button>
    </div>
  )
}

export default React.memo(Header) // HOF
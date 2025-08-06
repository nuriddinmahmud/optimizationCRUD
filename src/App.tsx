import { useCallback, useMemo, useState } from "react"
import Header from "./components/Header"

const App = () => {
  const [count, setCount] = useState(0)

  console.log("App render");
  const user = {name:"john"} // oybek

  const cachedUser = useMemo(()=>{
    return user  // chilonzor 
  }, [])

  const handleInc = () => setCount(p => p + 1) // chilonzor

  const cachedInc = useCallback(()=>{
    return handleInc()
  }, [])
  
  return (
    <div>
      <h2>App</h2>
      <button onClick={handleInc}>increment {count}</button>
      <Header title="salom" user={cachedUser} handleInc={cachedInc} setCount={setCount}/>
    </div>
  )
}

export default App
































// const App = () => {
//   return (
//     <div>
//       <h2>App</h2>
//     </div>
//   )
// }

// export default App








// Optimization part 1

// bundle size
// memo
// useMemo
// useCallback


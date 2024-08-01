import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let add = ()=>{
    setCount(prevcount => prevcount+1)
    setCount(prevcount => prevcount+1)
    setCount(prevcount => prevcount+1)
    setCount(prevcount => prevcount+1)
  }
  let remove = ()=>{
    setCount(prevcount => prevcount-1)
    setCount(prevcount => prevcount-1)
    setCount(prevcount => prevcount-1)
    setCount(prevcount => prevcount-1)

  }

  return (
    <>
      <h1>Interview React Question</h1>

      <button onClick={add}>Add Me : {count}</button>
      <button onClick={remove}>Remove Me : {count}</button>
      <br />
      <br />
      {count}
    </>
  )
}

export default App

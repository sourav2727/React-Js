import { useState } from "react"

function App() {
  const [color, setcolor] = useState("red")




  return (
    <>
      <div className="flex justify-center h-screen w-full" style={{ backgroundColor: color }}>
        <h1 style={{ color: "black", display: "flex", justifyContent: "center" }}>Background Changer</h1>
        <div className=" bg-white fixed flex flex-wrap bottom-12  rounded-lg p-3">
          <div className=" flex flex-wrap gap-4 ">
            <button onClick={()=>setcolor("red")} className="px-4 py-2 rounded-lg bg-red-400 ">red</button>
            <button onClick={()=>setcolor("green")} className="px-4 py-2 rounded-lg bg-green-400"> green </button>
            <button onClick={()=>setcolor("yellow")} className="px-4 py-2 rounded-lg bg-yellow-400"> yellow</button>
            <button onClick={()=>setcolor("olive")} className="px-4 py-2 rounded-lg " style={{backgroundColor:"olive"}}>olive</button>
            <button onClick={()=>setcolor("lime")} className="px-4 py-2 rounded-lg bg-lime-400">lime</button>
            <button onClick={()=>setcolor("aqua")} className="px-4 py-2 rounded-lg "  style={{backgroundColor:"aqua"}}>aqua</button>
            <button onClick={()=>setcolor("blue")} className="px-4 py-2 rounded-lg bg-blue-400">blue</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

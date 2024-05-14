import { useState } from "react"


function App() {
  
  const [color, setColor]=useState("olive")
  return (
    
     <div className="  w-full h-screen bg-green-500 flex justify-center " style={{backgroundColor:color}}>
      <div className=" bg-orange-200 rounded-xl fixed bottom-12  flex justify-center"> 
      <button className="rounded-xl bg-red-500 mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("red")}>Red</button>
      <button className="rounded-xl bg-blue-500 mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("blue")}>Blue</button>
      <button className="rounded-xl bg-gray-500 mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("gray")}>Gray</button>
      <button className="rounded-xl bg-yellow-500 mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("yellow")}>Yellow</button>
      <button className="rounded-xl bg-black text-white mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("black")}>Black</button>
      <button className="rounded-xl bg-purple-500 mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("purple")}>Purple</button>
      <button className="rounded-xl bg-white mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("white")}>White</button>
      <button className="rounded-xl bg-orange-500 mx-4 px-6 my-2 outline-none py-2 text-lg font-serif" onClick={()=>setColor("orange")}>Orange</button>


      </div>

     </div>
    
  )
}

export default App

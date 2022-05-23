import { BsHandIndexThumb} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Grid = () => {

  const  [data,setdata] = useState([])

  useEffect(() => {
    const getData = async () => {
      const DataFromServer = await fetchData()
      setdata(DataFromServer)
    }
    getData()
  })
  // Fetch Data From server
  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datas = await res.json()
    return datas
  }

  
  return (
    <div className="grid grid-cols-4 gap-4 px-44 py-16 ">
        {data.map(datas=> (
            <div key={datas.id} className="bg-neutral-300 rounded-lg relative " >
              <img src="src/assets/Warm.jpg" alt="Warm" className="rounded-t-lg h-25 w-25 "/>
              <Link to={`/Details/${datas.id}`}>
                <button className="bg-sky-500/50 rounded-full absolute right-1 top-1 p-3 text-slate-100 text-xl " onClick={() => viewDetails(datas.id)}>
                    <BsHandIndexThumb/>
                </button>
              </Link>
            <div className="flex flex-col">
                <div className="text-center p-4 font-bold">{datas.title}</div>
                <div className="p-4">{datas.body}</div>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Grid
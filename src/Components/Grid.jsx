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
    <div className="grid auto-cols-fr md:grid-cols-2 lg:grid-cols-3 gap-10 px-16 py-5 md:px-28 md:py-10 lg:px-28 lg:py-10 xl:px-44 xl:py-16">
        {data.map(datas=> (
            <div key={datas.id} className=" rounded-lg  flex flex-col " >
              <div className="relative">
                <img src="src/assets/Warm.jpg" alt="Warm" className="rounded-t-lg h-25 md:max-w-96 "/>
                  <button className="bg-indigo-900 rounded-full absolute right-1 bottom-1 md:right-2 md:bottom-3  text-slate-100 hover-none" >
                      <div className="text-xs xl:text-base px-5 pb-1">news</div>
                  </button>
              </div>
              <div className="flex flex-col content-center bg-neutral-300 px-1 py-1 lg:px-4 lg:py-3 xl:px-8 xl:py-5 max-h-40 lg:max-h-56 xl:max-h-64 rounded-b-lg shadow-xl">
                  <div className=" font-bold text-xs xl:text-xl whitespace-nowrap text-justify text-ellipsis overflow-hidden h-6 md:h-10 ">
                    {datas.title}
                  </div>
                  <div className="text-xs xl:text-base h-8 md:h-14 whitespace-nowrap text-ellipsis overflow-hidden">{datas.body}</div>
                  <Link to={`/Details/${datas.id}`}>
                  <div className="text-blue-900 text-xs xl:text-base "><b>Read More</b></div>
                  </Link>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Grid
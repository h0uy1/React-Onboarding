import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Details = () => {
  const {id} = useParams()

  const [detail,setdetails] = useState([])

  useEffect(() => {
      const getDetails = async () => {
      const detailsFromserver = await fetchDetails()
      setdetails(detailsFromserver)  
      }
      getDetails()
  })

  


  // Fetch Details From server
  const fetchDetails = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const det = await res.json();
      return det
    }
  
    
  return (
    <div>
      <div className="py-1 px-3 sm:px-16 sm:py-4 lg:py-10 lg:px-40 xl:py-16 xl:px-64">
        <Link to={"/"}>
            <div className="flex justify-items-start items-center pb-3">
              <div className=""><IoChevronBackSharp/></div>
              <b className="pl-2 text-base">Back</b>
            </div>
        </Link>
          
          <h1 className="text-4xl text-indigo-900"><b>Lorem ipsum dolor sit met</b></h1>
          <div className="flex justify-center">
            <img src="../src/assets/Warm.jpg" className="p-10 sm:min-h-72 sm:max-w-xl lg:max-w-2xl lg:min-h-96"></img>
            </div>
          <p className="text-lg text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <hr className="mt-20 h-0.5 bg-slate-900"/>
          <h1 className="text-4xl text-indigo-900 pt-10"><b>Comments()</b></h1>
          <form action="">
            <div className="pt-5 pb-20">
              <input type="text" placeholder="Email" className="pl-5 border-2 w-1/2 py-2 border-indigo-900 rounded  "></input>
            </div>
          </form>
        {detail.map(det =>(
          <>
            <div key={det.id} className="pb-5 px-10">
              <div><b>{det.email}</b></div>
              <div className="text-justify">{det.body}</div>
              <div><hr className="my-10"/></div>
            </div>
          </>
        ))}
      </div>
      
    </div>
  )
}

export default Details
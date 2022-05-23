import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const Details = () => {

  const [detail,setdetails] = useState([])

  useEffect(() => {
      const getDetails = async () => {
      const detailsFromserver = await fetchDetails()
      setdetails(detailsFromserver)  
      }
      getDetails()
  })

  const {id} = useParams()

  // Fetch Details From server
  const fetchDetails = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/comments/' + id);
      const det = await res.json();
      return det
    }
  
    
  return (
    <div>
       
    </div>
  )
}

export default Details
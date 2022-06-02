import { IoCloseOutline } from "react-icons/io5";
import {useState} from "react";

const Nav = () => {
  const [state,setState] = useState(true)
  return (

    <nav>
      {state && <div className="p-2 grid grid-cols-2 place-items-center grid-flow-col auto-cols-max bg-indigo-800 h-auto top-0 text-white">
              <div className="grid grid-cols-2 gap-4 ">
                <div>
                  <div className="">We are now hosting events with zoom webinar!</div>
                </div>
                <div className="">
                  <u>Find Out More</u>
                </div>
              </div>
                <div className="place-self-center " onClick={()=> setState(false)}>
                  <IoCloseOutline className="text-2xl"/>
                </div>
            </div>}

    </nav>
  )
}

export default Nav
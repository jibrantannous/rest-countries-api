import { useState } from "react";
import { IoIosArrowDown  } from "react-icons/io";
import { DropOptionList } from "./DropOptionList";


export const DropDown = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle(!toggle)
  }

  return (

    <div className="dropdown__container">

        <div className="dropdown-main">
            <p>Filter by Region</p>
            <IoIosArrowDown
              onClick={handleToggle}
            />

        </div>
        
        {
          toggle && <DropOptionList />
        }
        
    </div>
  )
}

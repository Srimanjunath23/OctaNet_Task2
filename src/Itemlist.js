import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Itemlist = ({items,handlecheck,handleDelete}) => {
  return (  
    <ul>
        {items.map((item)=>(
            
            <li className='item' key={item.id}>
              <input type='checkbox' checked={item.checked} onChange={()=>handlecheck(item.id)}></input>
              <label style={(item.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>handlecheck(item.id)}>{item.itemo}</label>
              <FaTrashAlt 
              role='button'
              tabIndex="0"
              onClick={()=>handleDelete(item.id)}/>
            </li>
          ))
        }
       </ul>
  )
}

export default Itemlist
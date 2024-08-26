import React from 'react'
import { FaPlusSquare } from 'react-icons/fa'

const AddItems = ({newItem,setnewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={(e)=>handleSubmit(e)}>
      
        <input
        autoFocus
        id='addItem' 
        type='text'
        placeholder='Add Items'
        value={newItem}
        onChange={(e)=>setnewItem(e.target.value)}
        required></input>
        <button><FaPlusSquare /></button>
        
    </form>
  )
}

export default AddItems
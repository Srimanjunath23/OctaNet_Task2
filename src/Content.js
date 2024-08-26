import React from 'react'

import Itemlist from './Itemlist';



const Content = ({items,handlecheck,handleDelete}) => {
 
 

  return (
    <main>
          
        {(items.length)?( 
          <Itemlist 
          items={items}
          handlecheck={handlecheck}
          handleDelete={handleDelete}
          />
      ):
      <p className='item'>Your list is Empty</p>

    
        }
   
    </main>
    )
    
}


export default Content
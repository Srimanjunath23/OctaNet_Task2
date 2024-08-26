import React from 'react'

const Searchbox = ({search,setSearch}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()} className='searchForm'>  
        <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />

    </form>
  )
}

export default Searchbox
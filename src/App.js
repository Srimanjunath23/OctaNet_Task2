import './App.css';
import Header from './Header';
import Content from './Content';
import Footer  from './Footer';
import { useState } from 'react';
import AddItems from './AddItems';
import Searchbox from './Searchbox';



function App() {
   //Content.js Script:
   const [items ,setitems]=useState(JSON.parse(localStorage.getItem('todo_list')));
  const [newItem ,setnewItem]=useState('');
  const [search,setSearch]=useState('');
  const handlecheck = (id)=>{
    const itemlist = items.map((item)=>
      item.id===id ? {...item,checked:!item.checked}:item)
    setitems(itemlist)
    localStorage.setItem("todo_list",JSON.stringify(itemlist));
  }
  const handleDelete = (id)=>{
    const itemlist = items.filter((item)=>
      item.id!==id)
    setitems(itemlist)
    localStorage.setItem("todo_list",JSON.stringify(itemlist));
  }
  const addItem=(item)=>{
    const id=items.length ? items[items.length-1].id + 1 :1;
    const addNewItem={id,checked:false,itemo:item};
    const itemlist=[...items,addNewItem];
    setitems(itemlist);
    localStorage.setItem("todo_list",JSON.stringify(itemlist));
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!newItem)return; 
    addItem(newItem);
    setnewItem('');

  }
  
  return (
    <div className='App'>
        <Header title="To Do List" />
        <AddItems 
        newItem={newItem}
        setnewItem={setnewItem}
        handleSubmit={handleSubmit}
        
        />
        <Searchbox 
        search={search}
        setSearch={setSearch}
        />
        <Content 
        items={items.filter(item=>((item.itemo).toLowerCase().includes(search.toLowerCase())))}
        handlecheck={handlecheck}
        handleDelete={handleDelete}
        />
        <Footer />
    </div>
  
  );
}

export default App;

import React, {useState, useEffect } from 'react';
import './App.css';
//import components
import AddList from './Components/AddList/AddList';
import TodoList from './Components/TodoList/TodoList';

 const App =()=> {
   //All states of Application
  const [inputText, setInputText]=useState("");
  const [toDos,setToDos]=useState([]); 
  const [status, setStatus]=useState('All');
  const [filterStatus, setFilterStatus]= useState([]);
  const [item, setItem]=useState({});
  const [edit, setEdite]=useState(false);
  //useEffect to fetch data from local storage
  useEffect(() => {
    getLocalTodo()
  }, []);
  //useEffect to switch between statues
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(toDos));
    switch(status){
      case 'Completed':
       setFilterStatus(toDos.filter(item=>item.completed===true));
       break;
       case 'UnCompleted':
       setFilterStatus(toDos.filter(item=>item.completed===false));
       break;
       default:
       setFilterStatus(toDos);
       break;
    }
  }, [toDos, status]);
  //get data from local storage
  const getLocalTodo=()=>{
    let itemSaved;
    if (itemSaved===null) {
      itemSaved=[]
    }else{
      itemSaved=JSON.parse(localStorage.getItem(('todos')));
      setToDos(itemSaved)
    }
  };
  //delete all item function
  const deleteAllHandeler=()=>{
    const allDelete=toDos.splice(toDos.length);
    //console.log(allDelete);
    setItem({});
    setToDos(allDelete)
  }
  return (
    <div className='todo-app'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-7 col-md-10 col-12 m-auto">
            <h2 className='text-center mt-5'>Todo List App</h2>
            <AddList inputText={inputText} setInputText={setInputText} setToDos={setToDos} toDos={toDos} edit={edit} item={item} setEdite={setEdite} status={status}/>
            <TodoList toDos={toDos} setToDos={setToDos} setEdite={setEdite} filterStatus={filterStatus} item={item} setItem={setItem} setStatus={setStatus} setInputText={setInputText}/>
            <button className={`btn btn-style w-100 ${toDos.length===0?"bg-opacity":"bg-delete"}`} onClick={deleteAllHandeler}>Clear All</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

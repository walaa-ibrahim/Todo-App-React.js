import React, { Fragment } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({toDos,setToDos,filterStatus,setInputText,setStatus,setEdite,item,setItem}) =>{
  const ItemToDo=filterStatus.length===0? toDos.map((todo)=><TodoItem key={todo.id} toDos={toDos} setEdite={setEdite} setToDos={setToDos} text={todo.text} itemId={todo.id} item={item} setItem={setItem} completed={todo.completed} setInputText={setInputText}/>):
  filterStatus.map((todo)=><TodoItem key={todo.id} toDos={toDos} setEdite={setEdite} setToDos={setToDos} text={todo.text} itemId={todo.id} item={item} setItem={setItem} completed={todo.completed} setInputText={setInputText}/>)
  const statuesHandler=(e)=>{
    setStatus(e.target.value);
  } 
  return (
    <Fragment>
      <div className='d-flex justify-content-between'>
        <h4>list item</h4>
        <select onChange={statuesHandler} disabled={toDos.length===0?`disabled`:''} class="form-select" aria-label="Default select example">
          <option selected value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="UnCompleted">UnCompleted</option>
        </select>
      </div>
      <ul className="list-unstyled list-items my-3">
        {ItemToDo}
      </ul>
    </Fragment>
  )
}
export default TodoList

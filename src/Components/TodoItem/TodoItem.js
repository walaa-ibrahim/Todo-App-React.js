import React, { Fragment } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css';

 function TodoItem({toDos,setToDos,text,itemId,completed,setInputText,setEdite,item,setItem}) {
  const completeHandeler=(id)=>{
    const completedItem=toDos.map((item)=>{
      if (item.id===id) {
        item.completed=!item.completed
        return item
      }
      return item
    })
    setToDos(completedItem)
  }
  const deleteItemHandeler=(id)=>{
    const itemDeleted=toDos.filter(item=>(item.id!==id));
    setToDos(itemDeleted)
  }
  //console.log(setInputText);
  const editHandeler=(id)=>{
    const itemDeleted=toDos.filter(item=>(item.id!==id));
    setToDos(itemDeleted)
     item=toDos.find(item=>item.id===id);
    item.edited=true
      //inputText=x.text;
      setInputText(item.text);
      setEdite(true)
      setItem(item)
      console.log(item);
  }
    return(
      <Fragment>
      <li className="todo-item my-2">
      <div className={`px-2 ${completed ?"btn-complete":""}`}>{text}</div>
     <div>
        <button className={`edit ${completed?"btn-complete":""}`} onClick={()=>completeHandeler(itemId)}> <FontAwesomeIcon icon={faCheck} /></button>
        <button className='success' onClick={()=>editHandeler(itemId)}> <FontAwesomeIcon icon={faPen} /></button>
        <button className='btn-trash color-danger' onClick={()=>deleteItemHandeler(itemId)}> <FontAwesomeIcon icon={faTrash} /></button>
     </div>
    </li>
      </Fragment>
    )
      
    
}
export default TodoItem

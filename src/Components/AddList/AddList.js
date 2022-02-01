import React from 'react'
//Import styles and components
import "./Addlist.css";
const AddList = ({setInputText,inputText,item,setToDos,toDos,edit,setEdite})=> {
  const handelSubmit=(e)=>{
    e.preventDefault();
    if  (inputText==='') {
     alert('Please Insert A Todo')
    }
    else{
      setToDos([...toDos, {text:inputText,completed:false,edited:false, id:Math.floor(Math.random()*100)}]);
      setInputText('');
    }
   
  };
  
  const handleInputChange =(e)=>{
    e.preventDefault();
    setInputText(e.target.value);
  };
 
  const updateHandeler=(e)=>{
    e.preventDefault();
    setEdite(false);
    setInputText(e.target.value);
    item.text=inputText
    item.edited=false;
    console.log(item.text);
    setToDos([...toDos, item]);
   
  }
  return (
    <div className='add-form my-5'>
      <form>
        <input type="text" value={inputText} className='form-control my-3' id="name" placeholder='Enter Todo...' onChange={handleInputChange}/>
        <button className='btn btn-style add-bg mb-3' onClick={!edit?handelSubmit:updateHandeler} type="submit">{!edit ? `Add`:`Update`}</button>
      </form>
    </div>
  )

}
export default AddList

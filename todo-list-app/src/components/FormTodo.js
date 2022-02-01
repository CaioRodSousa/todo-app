import React, { useState, useEffect, useRef } from 'react'

function FormTodo(props) {
    const [input, setInput] =  useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus()
    })


    const handleChange = e =>{
       setInput(e.target.value);
    };   


    const handlesubmit = e => {
        e.preventDefault();
    

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text:  input
     });
    
      setInput('');    
    };
return(
   <form className="todoForm" onSubmit =  {handlesubmit}>
     {props.edit ? ( 
     <>
     <input 
     type = "text" 
     placeholder = "edite sua tarefa" 
     value = {input}
     name = "text"
     className = 'todoInput'
     onChange = {handleChange}
     ref = {inputRef}
    />
    <button className = 'todoButton'>atualizar</button>
    </>
    ) : 
    ( 
    <>
    <input 
      type = "text" 
      placeholder = "adicionar tarefa" 
      value = {input}
      name = "text"
      className = 'todoInput'
      onChange = {handleChange}
      ref = {inputRef}
     />
     <button className = 'todoButton'>adicionar</button>
     </>
     )}
    
   </form>
 )
}

export default FormTodo
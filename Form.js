import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
     // Add todos to the list
     const submitTodoHandler = (e) => {
        e.preventDefault();
        inputText && setTodos([
            ...todos,
            {text: inputText, completed:false, id:Math.random() * 100}
        ]);
       setInputText('')
    }
        const inputTextHandler = (e) =>{
            setInputText(e.target.value);
        };
    return(
        <form>
            <input
            type='text'
            className='todo-input'
            value={inputText}
            onChange={inputTextHandler}
            />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
               <i className='fas fa-plus-square'></i>
            </button>
        </form>
    )
}
export default Form;
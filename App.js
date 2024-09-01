import React , {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <React.Fragment>
    
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </React.Fragment>
  )
}

export default App;

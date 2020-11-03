import React, { useState, useReducer } from 'react';
import { reducer, initialTodos } from './reducers/reducer'



function App() {
  const[items, dispatch] = useReducer(reducer, initialTodos);
  const[name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: { item: name }})
    setName('')
  }

  const handleChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  console.log(items);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={handleChange}
          />
  
      </form>
        {items.map((item) => (
            <div key={item.id} item={item} dispatch={dispatch} onClick={() => dispatch()}>
              {item.item}
            </div>
          )
        )} 
    </div>
  );
}

export default App;

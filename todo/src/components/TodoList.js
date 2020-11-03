import React from 'react';
import Todo from './Todo';


const TodoList = props => {

    const { items } = props;

    const handleClick = () => {
        props.handleClearItem();
    }

    return (
        <div>
            {items.map((item) => {
                return(
                <Todo handleToggleItem={props.handleToggleItem} key={item.id} item={item}/>
            )})}
            <button onClick={handleClick}>
                clear Todo
            </button>
        </div>
    )

}

export default TodoList;
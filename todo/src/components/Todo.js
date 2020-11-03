import React from 'react';


const Todo = (props) => {
    const handleClick = () => {
        props.handleToggleItem(props.item.id)
    }

    return (
    <div onClick={handleClick}>
        <p>{props.item.item}</p>
    </div>)
}

export default Todo;
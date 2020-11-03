

export const initialTodos = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    },
];

const newItem = (name) => {
    return { id: Date.now(), item: name, completed: false}
}


export const reducer = (state, action)=> {
    switch(action.type) {
        case('ADD_TODO'):
        return([...state, newItem(action.payload.item)])
    case('TOGGLE_TODO'):
        return (state.map(item => {
            if (state.id === action.payload.id) {
                return { ...item, completed: !item.completed }
            }
            return state
            }))
    case('DELETE_TODO'):
        return (state.filter(item => 
            item.id !== action.payload.id
        ))
    default:
        return(state);
}
}

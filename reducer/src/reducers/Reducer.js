
export const initialState = {
    todo:[]
};



export const Reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TODO':
            return {todo:[...state.todo,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
        case 'TOGGLE':
            const newTodoList = {todo: state.todo.map(item => {
                if (item.id === action.payload) {
                    return {...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })}
            return newTodoList;
        
        case 'CLEAR':
            const newCleared = {todo: state.todo.filter(item => {
                return item.completed === false
            })}
            console.log(newCleared)
            return newCleared;
        default:
            return state;
    }
}
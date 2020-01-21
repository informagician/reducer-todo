
export const initialState = {
    todo:[
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about reducers 2',
        completed: false,
        id: 3892987590
    }
]
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
        default:
            return state;
    }
}
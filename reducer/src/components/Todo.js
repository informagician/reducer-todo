import React, { useState, useReducer } from 'react';
import { initialState, Reducer } from '../reducers/Reducer';

const Todo = () => {
    const [ state, dispatch ] = useReducer(Reducer, initialState);
    const [ newTodo, setNewTodo ] = useState(state)
    console.log(state)
    return(
        <section>
            {state.map(item => (
                <div className="card" key={item.id}>
                    <h2>{item.item}</h2>
                </div>
            ))}
        </section>
    )
}

export default Todo;
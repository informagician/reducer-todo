import React, { useState, useReducer } from 'react';
import { initialState, Reducer } from '../reducers/Reducer';

const Todo = () => {
    const [ state, dispatch ] = useReducer(Reducer, initialState);
    const [ newTodo, setNewTodo ] = useState(state)

    const handleChanges = e => {
        setNewTodo(e.target.value)
    }

    console.log(newTodo)
    return(
        <section>
            <div className="top">
                <input type="text" name="newTodo" onChange={handleChanges} />
                <button onClick={() => dispatch({type: 'ADD_TODO', payload: newTodo })}>Add Todo</button>
                <button onClick={() => dispatch({type: 'CLEAR'})}>Clear Completed</button>
            </div>
            <main>
                {state.todo.map(item => (
                    <div className="card" key={item.id} onClick={() => dispatch({type: 'TOGGLE', payload: item.id})}>
                        <h2 className={item.completed ? 'completed' : 'not-completed'}>{item.item}</h2>
                    </div>
                ))}
            </main> 
        </section>
    )
}

export default Todo;
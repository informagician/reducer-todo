import React from 'react';

const AddTodo = () => {


    function handleForm(e) {
        
    }
    return(
        <form onSubmit={handleForm}>
            <input type="text" />
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo;
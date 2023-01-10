
const initialState = [{
    id: 1,
    todo: 'aprender React',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }


    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'mejorar en React',
    done: false
};

const addtodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};

todos = todoReducer( todos, addtodoAction );

console.log(todos);
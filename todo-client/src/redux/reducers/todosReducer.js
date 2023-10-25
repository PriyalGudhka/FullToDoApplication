//Tihis file has the logic for storing the data in the redux
import * as actionTypes from '../actions/variables';

const todosReducers = (state = [], action) => {
    console.log("Action: " + action.payload);
    switch (action.type) {

        //This case is used to handle to add a new todo item
        case actionTypes.ADD_NEW_TODO:
            return [action.payload, ...state]

        //This case is used to handle to retrieve all the todo items
        case actionTypes.GET_ALL_TODO:
            return action.payload

        //This case is used to modify a todo item
        case actionTypes.UPDATE_TODO:
            window.location.reload(false);

            return state.map(
                todo => todo._id === action.payload._id ? { ...todo, status: !action.payload.status } : todo
            );

         //This case is used to remove a todo item
        case actionTypes.DELETE_TODO:
            window.location.reload(true);

            return state.filter(todo => todo._id !== action.payload._id);


        default:
            return state;
    }
}

export default todosReducers;
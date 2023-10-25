import { ADD_NEW_TODO, GET_ALL_TODO, UPDATE_TODO, DELETE_TODO } from './variables';

//Used for calling the POST HTTP method by passing the details to add a new todo item
export const postTodo = (todoTitle, todoDescription, todoDueDate, todoDueTime) => async (dispatch) => {
  fetch("http://localhost:8081/todos", {
    method: "POST",
    body: JSON.stringify({
      title: todoTitle,
      description: todoDescription,
      dueDate: new Date(`${todoDueDate}T${todoDueTime}:30Z`)

    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      dispatch({ type: ADD_NEW_TODO, payload: response.data }); //Passes the data to the todoReducer file
    })
    .catch(error => {
      if (error) throw error
    })
}

//Used for calling the GET HTTP method for retrieving the existing todo items
export const getAllTodos = () => async dispatch => {

  fetch("http://localhost:8081/todos")
    .then(response => response.json()).then(response => {
      dispatch({ type: GET_ALL_TODO, payload: response });

    })

    .catch((error) => {
      if (error) throw error
    })
}

//Used for calling the DELETE HTTP method for removing the todo item
export const deleteTodo = (id) => async (dispatch) => {

  fetch(`http://localhost:8081/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      dispatch({ type: DELETE_TODO, payload: response });

    })
    .catch(error => {
      if (error) throw error
    })
}

//Used for calling the PUT HTTP method for modifying the todo item by marking the status as Pending/Complete
export const updateNewTodo = (_id, todoTitle, todoDescription, toDoDueDate, todoStatus) => async (dispatch) => {
  const duedate = toDoDueDate.slice(0, 10);
  const duetime = toDoDueDate.slice(11, 19);
  fetch(`http://localhost:8081/todos/${_id}`, {

    method: "PUT",
    body: JSON.stringify({
      title: todoTitle,
      description: todoDescription,
      dueDate: new Date(`${duedate}T${duetime}Z`),
      status: !todoStatus
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      dispatch({ type: UPDATE_TODO, payload: response.data });
    })
    .catch(error => {
      if (error) throw error
    })

}

//Used for calling the PUT HTTP method for modifying the todo title and description
export const updateToDoDetails = (_id, todoTitle, todoDescription, toDoDueDate, todoStatus) => async (dispatch) => {
  const duedate = toDoDueDate.slice(0, 10);
  const duetime = toDoDueDate.slice(11, 19);
  fetch(`http://localhost:8081/todos/${_id}`, {

    method: "PUT",
    body: JSON.stringify({
      title: todoTitle,
      description: todoDescription,
      dueDate: new Date(`${duedate}T${duetime}Z`),
      status: todoStatus
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      dispatch({ type: UPDATE_TODO, payload: response.data });
    })
    .catch(error => {
      if (error) throw error
    })

}
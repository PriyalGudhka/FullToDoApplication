//This component is used for modifying the todo list or mark the todo as complete/pending

import { deleteTodo, updateNewTodo, updateToDoDetails } from "../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Todo = ({
  todoId,
  todoTitle,
  todoDescription,
  todoDueDate,
  todoCreatedDate,
  todoLastModifiedDate,
  todoStatus,
  todo,
}) => {
  const [displayTodoDetails, setdisplayTodoDetails] = useState(false); //Used for setting the initial state of the data
  const [title, setTitle] = useState(todoTitle);
  const [description, setDescription] = useState(todoDescription);
  const [editing, setEditing] = useState(false);

  const toDoDueDate = todoDueDate.slice(0, 10);
  const toDoDueTime = todoDueDate.slice(11, 19);

  const dispatch = useDispatch();

  const regex = /[a-zA-Z]/; //Used for validating the title and description

  //Used slice method for trimming the created date and time
  const createdDate = todoCreatedDate.slice(0, 10);
  const createdTime = todoCreatedDate.slice(11, 19);

  //Used slice method for trimming the last modified date and time
  const lastModifiedDate = todoLastModifiedDate.slice(0, 10);
  const lastModifiedTime = todoLastModifiedDate.slice(11, 19);

  //This function will display the todo details by showing title, description
  const showDetails = () => {
    setdisplayTodoDetails(!displayTodoDetails);
  };

  //Used for validaing the form data and modifying title and description
  const onFormSubmit = (e) => {
    window.location.reload(false);

    setEditing((prevState) => !prevState);

    //Sends alert in case the title and description are blank
    if (title === "" || description === "") {
      alert('Please add value. These fields cannot be blank.');
    }

    //Used for validating the title, sends alert in case it has only special characters
    else if (!regex.test(title)) {
      alert('Please add valid title. It cannot have only special characters.');

    }

   //Used for validating the description, sends alert in case it has only special characters
    else if (!regex.test(description)) {
      alert('Please add valid description. It cannot have only special characters.');

    }

    else {
      dispatch(
        updateToDoDetails(todoId, title, description, toDoDueDate, todoStatus) //Sends request for modifying the todo details
      );
    }
  };

  return (
    <li className="todo-task"
      style={{
        backgroundColor: todoStatus ? "rgb(171 221 151)" : "#e5d6d8",
      }}
    >

      <span className="todo-title" style={{
        textDecoration: todoStatus ? "#000000 line-through" : "none",
      }}>{todoTitle}
      </span>

      <span className="todo-icons">
        <span>
          <i className="fas fa-eye" onClick={showDetails} />
        </span>
        <span>
          <i
            className="fas fa-pen"
            onClick={() => setEditing((prevState) => !prevState)}
          />
        </span> 

        <span>
          <i
            className="fas fa-check"
            style={{
              color: todoStatus ? "#277c04" : "black",
            }}
            onClick={() =>
              dispatch(
                updateNewTodo(
                  todoId,
                  todoTitle,
                  todoDescription,
                  toDoDueDate,
                  todoStatus
                )
              )
            }
          />
        </span>
        <span>
          <i
            className="fas fa-trash"
            onClick={() => dispatch(deleteTodo(todoId))}
          />
        </span>
      </span>

      <form style={{ display: editing ? "inline" : "none" }}>
        <br />
        <br />
        <div className="fields">
          <label htmlFor="title" className="todoTitle">
            Title:{" "}
          </label>
          <input
            type="text"
            name="title"
            placeholder="Task Title ..."
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>

        <br />
        <div id="fields" className="fields">
          <label htmlFor="description" className="todoDescription">
            Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            placeholder="Task Description ..."
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button className="updateTodobutton" onClick={onFormSubmit}>
          Update To-Do
        </button>
      </form>
      {displayTodoDetails && (
        <span className="todo-details">
          <p>Description: {todoDescription}</p>
          <p>Due Date: {toDoDueDate}</p>
          <p>Due Time: {toDoDueTime}</p>
          <p>Created Date: {createdDate}</p>
          <p>Created Time: {createdTime}</p>
          <p>Last Modified Date: {lastModifiedDate}</p>
          <p>Last Modified Time: {lastModifiedTime}</p>
          <p>
            Status: {String(todoStatus ? "To-do Completed" : "To-do Pending")}
          </p>
        </span>
      )}
    </li>
  );
};

export default Todo;

import { useState } from "react";

import { useDispatch } from "react-redux";

import { postTodo } from "../redux/actions";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");

  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();

  //Method is used to add a new todo item
  const onFormSubmit = (e) => {
    window.location.reload(false);

    dispatch(postTodo(title, description, dueDate, dueTime)); //Sends post request for adding a todo

    setTitle("");
    setDescription("");
    setDueDate("");
    setDueTime("");

    setShowForm(!showForm);
  };

  //Used for hiding the form once the new todo item is added
  const showToDoForm = (e) => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button className="add_task_button" onClick={showToDoForm}>
        Add New To-do Task
      </button>

      {showForm && (
        <form onSubmit={onFormSubmit}>
          <br />
          <div className="todo_form">
            <div className="fields">
              <label htmlFor="title" className="title">
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
              <label htmlFor="description" className="description">
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
            <div id="fields" className="fields">
              <label htmlFor="due_date" className="due_date">
                Due Date:{" "}
              </label>
              <input
                type="date"
                name="date"
                placeholder="Task Date ..."
                required
                value={dueDate}
                onChange={(e) => {
                  setDueDate(e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div id="fields" className="fields">
              <label htmlFor="due_time" className="due_time">
                Due Time:{" "}
              </label>
              <input
                type="time"
                name="time"
                placeholder="Task Time ..."
                required
                value={dueTime}
                onChange={(e) => {
                  setDueTime(e.target.value);
                }}
              ></input>
            </div>
            <br />
            <button className="saveTask">Save To-Do</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TodoForm;

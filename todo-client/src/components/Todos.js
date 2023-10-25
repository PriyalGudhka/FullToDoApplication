import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from 'react-redux';
import Todo from "./Todo";

export const Todos = () => {
    const dispatch = useDispatch();

    //Used for displaying all the todo items
    const todosTitle = useSelector(state => state.todos);
    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    return (
        <article>
            <ul>
                {
                    todosTitle.map(todo => (
                        <Todo
                            key={todo._id}
                            todoId={todo._id}
                            todoTitle={todo.title}
                            todoDescription={todo.description}
                            todoDueDate={todo.dueDate}
                            todoCreatedDate={todo.createdDate}
                            todoLastModifiedDate={todo.lastModifiedDate}
                            todoStatus={todo.status}
                            todo={todo}

                        />
                    )

                    )
                }
            </ul>
        </article>
    )
}

export default Todos;
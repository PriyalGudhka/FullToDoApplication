import { request } from 'express';
import Todo from '../models/todo.js';

// This method is used for adding a new to-do item
export const save = async (todo) => {
    const newToDo = new Todo(todo);
    console.log("New To do: " + newToDo);
    return newToDo.save();
}

// This method is used for fetching a list of existing to-do items
export const search = async (query) => {
    const params = { ...query };
    const todos = Todo.find(params).exec(); //Used find method by passing the parameters to search the to-do items
    return todos;
}

// This method is used for fetching a single to-do item based on the id passed
export const get = async (id) => {
    console.log("Inside GEt service method");
    const todo = Todo.findById(id).exec(); //Used findById method by passing the id to search a particular to-do item
    return todo;
}

// This method is used for modifying a to-do item
export const update = async (updatedContent) => {

    await Todo.findOneAndUpdate(
        { _id: updatedContent._id },
        { title: updatedContent.title },
        { description: updatedContent.description },
        { status: updatedContent.status }
    )
    const todo = await Todo.findById(updatedContent._id).exec();

    return todo;

}

// This method is used for removing a to-do item from the list
export const remove = async (id) => {
    const todo = Todo.findByIdAndRemove(id).exec(); //Used findByIdAndRemove method by passing the id to remove a particular to-do item

    return todo;
}

export const updateNewStatusToDo = (id, todoList) => {

    const todo = Todo.findOneAndUpdate({ _id: id }, {
        title: todoList.title,
        description: todoList.description,
        status: todoList.status,
        lastModifiedDate: new Date()
    }).exec();
    return todo;

}

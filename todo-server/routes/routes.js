import express from 'express';
/* Imports todo-controller.js for calling the different methods defined in it */
import * as todoController from '../controllers/todo-controller.js';

const route = express.Router();

route.post('/todos', todoController.post) //Adds a new todo item by using the POST method
route.get('/todos', todoController.index); //Retrieves all the existing todo items by using the GET method
route.put('/todos/:id', todoController.updateStatusToDo); //Updates a to-do item by using the PUT method based on the ID passed (Internally calls the update method defined in todo-controller.js file)
route.delete('/todos/:id', todoController.remove) //Removes a to-do item by using the DELETE method based on the ID passed (Internally calls the remove method defined in todo-controller.js file)

export default route;


import * as todoService from './../services/todo-service.js';


//Used for setting the response code to 200 in case of a valid request
const setResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//Used for setting the response code to 500 in case of a invalid request
const setError = (err, response) => {
    response.status(500);
    response.json(err);
}

//This method is used for adding a new to-do item using "POST" method
export const post = async (req, res) => {
    try {
        const toDo = req.body;

        //Calls the save method present in todo-service.js file for adding a new to-do item
        const savedToDo = await todoService.save(toDo);
        console.log("Inisde todo-cpntroller");
        setResponse(savedToDo, res);
    }
    catch (error) {
        setError(error, res);
    }
}

//This method is used for fetching all the existing to-do items using "GET" method
export const index = async (req, res) => {
    try {
        const title = req.query.title;
        const description = req.query.description;
        const query = {};

        //Assigns title to the query variable
        if (title)
            query.title = title;

        //Assigns description to the query variable
        if (description)
            query.description = description;

        //Calls the search method present in todo-service.js file for fetching all the items
        const searctToDo = await todoService.search(query);
        setResponse(searctToDo, res);
    }

    //In case of an invalid response, error message is displayed
    catch (error) {
        setError(error, res);
    }
}

//This method is used for modifying a to-do item using "PUT" method
export const update = async (req, res) => {
    try {
        //Fetched the to-do id from the request parameter
        const id = req.params._id;
        const updatedContent = { ...req.body };
        updatedContent._id = _id;

        //Calls the get method present in todo-service.js file for modifing a to-do item based on the id passed
        const updateTodo = await todoService.update(updatedContent);
        setResponse(updateTodo, res);
    }
    catch (error) {
        setError(error, res);
    }
}

//This method is used for removing a to-do item using "DELETE" method
export const remove = async (req, res) => {

    try {
        const id = req.params.id;

        //Calls the remove method present in todo-service.js file for deleting a to-do item based on the id passed
        const todo = await todoService.remove(id);

        setResponse({ message: `Successfully deleted a to-do item with Id: ${id}` }, res);
    }

    catch (error) {
        setError(error, res);
    }
}

//This method is used for removing a to-do item using "DELETE" method
export const updateStatusToDo = async (req, res) => {

    try {

        const id = req.params.id;
        const todolistItem = { ...req.body };

        const todo = await todoService.updateNewStatusToDo(id, todolistItem);

        setResponse(todo, res);
    }

    catch (error) {
        setError(error, res);
    }
}



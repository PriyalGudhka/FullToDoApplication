Web Design & User Experience Assignment 9

Name: Priyal Vimal Gudhka
NU ID No.: 002747680
Email Id: gudhka.p@northeastern.edu


About the Assignment : -

As a part of this assignment, I have created various API's for fetching the list of existing to-do items, add a new to-do item, modify a to-do item by passing the id, mark the to-do item as complete/pending and remove the to-do item by passing the id using Mongoose library, Express, Nodejs, REST API, Redux and MongoDB is used for storing the data.

A to-do item can have a title (Mandatory field), description (Mandatory field), dueDate, dueTime, status, createdDate (Default value is the current Date and Time) and lastModifiedDate (Default value is the current Date and Time)

Below are the API's and HTTP methods used to perform various operations: -

1. "POST" method is used for adding a new to-do item 
API: http://localhost:8081/todos. Then Add title, description, dueDate, dueTime, status, createdDate and lastModifiedDate which will store a new to-do in MongoDB.

2. "GET" method is used for fetching a list of existing to-do items
API: http://localhost:8081/todos. In the repsone, a list of to-do item will be displayed.

4. "PUT" method is used for modifying a to-do item by passing id and for marking the status as Pending/Complete
API: http://localhost:8081/todos/:id (Add Id of the to-do item to modify its details). Details will be updated and stored in the MongoDB of that particular to-do item.

5. "DELETE" method is used for removing a to-do item by passing id
API: http://localhost:8081/todos/:id (Add Id of the to-do item to delete). To-do item will be deleted based on the Id passed.

Created a database in MongoDB with name "todoListDB" having a collection named "todos" which will store all the to-do items

Following is the folder strcuture of the project:

1. todo-client folder contains components folder having Todo form (Used for handling frontend of the Todo application)

2. redux folder contains actions and reducers folder

3. actions folder contains file which calls different HTTP methods and have used dispatch for storing the response in redux

4. reducers folder contains the todoReducers.js file having methods for storing data in redux using different actionTypes

5. App.scss and Header.scss has styling for Todo application

5. controller folder contains the todocontroller.js file having methods such as index, post, get, update and remove which invokes the methods defined in the service class

6. todo-server folder contains components folder having logic for handling backend of the Todo application

7. models folder contains index.js file and todo.js file which defines fields used for performing various operations on a to-do item

8. routes folder contains index.js file and todo-routers.js which invokes the various methods defined in controller for performing different operations

9. services folder contains the todo-service.js file which consists of methods such as save, search, get, update, remove which performs operations like fetching, modifying, removibg a to-do item

10. server.js which is used for defining the port number to be used

11. node_modules, package.json & package-lock.json is generated using commands

Steps for generating the various folders: -

1. Open terminal

2. Type npx create-react-app todo

3. Then type cd "todo-client"

4. To run enter "npm start"

5. Then type cd "todo-server"

6. To run enter "npm start"


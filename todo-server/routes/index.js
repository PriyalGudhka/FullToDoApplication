import TodoRouter from './routes.js';

export default (app) => {
    app.use('/',TodoRouter); //Used for setting the url to fetch the response

}
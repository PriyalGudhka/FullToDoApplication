import './App.scss';
import './components/Header.scss'
import Header from './components/Header';
import TodoForm from './components/ToDoForm';
import Todos from './components/Todos';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      view: false
    }
  }

  //Lifecycle method for get request

  componentDidMount() {
    fetch('http://localhost:8081/todos')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  updateState = () => {
    fetch('http://localhost:8081/todos')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  postData = () => {
    this.setState({ edit: false })
  }

  //Using components to load the header, todo form and all the existing todo items
  render() {
    return (
      <div>
        <Header />
        <TodoForm />
        <Todos />
      </div>
    );
  }
}

export default App;

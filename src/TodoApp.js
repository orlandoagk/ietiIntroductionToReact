import React from 'react'
import TodoList from './TodoList'

export default class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '',priority:'' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br></br>
            <label htmlFor="new-todo-priority">
              Tell me the priority
            </label>
            <input
              id="new-todo-priority"
              onChange={this.handleChangePriority}
              value={this.state.priority}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
    
    handleChangePriority = (e) =>{
        this.setState({...this.state, priority:e.target.value})
    }
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const date = new Date();
      const dateInString = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
      const newItem = {
        text: this.state.text,
        dueDate: dateInString,
        priority:this.state.priority
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        priority: ''
      }));
    }
  }
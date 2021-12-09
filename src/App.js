import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: '',
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: '',
    });
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="App">
        <Overview tasks={tasks}></Overview>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input
              type="text"
              name="task-input"
              id="task-input"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;

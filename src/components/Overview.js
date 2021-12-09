import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks } = this.props;
    return (
      <div id="task-container">
        <ul className="task-list">
          {tasks.map((task, i) => {
            return <li key={i}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Overview;

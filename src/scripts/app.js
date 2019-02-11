import '../styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { RoutingTask } from './11-2-19FirstRoutingTask';



class App extends React.Component {

  render() {
    return (
      <RoutingTask />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


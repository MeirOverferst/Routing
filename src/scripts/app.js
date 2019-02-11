import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class MyTitle extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(ev) {
    this.refs.myImage.style.width = '900px';
  }

  render() {

    const framework = 'React';

    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <h1 className="green big">Welcome to {framework} world</h1>
        <img src="./images/home.jpg" width="300" height="300" ref="myImage" />
      </div>
    );
  }
}

ReactDOM.render(<MyTitle />, document.getElementById('app'));


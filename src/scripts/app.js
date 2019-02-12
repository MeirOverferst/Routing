import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

class DepictSpecificInfoFish extends React.Component {
  render() {
    return <p className="lead">Info about {this.props.match.params.fishtype}</p>;
  }
}

class FishesSection extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Select A Fish</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/fishes/bacalaos">Show Bacalaos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/fishes/tunas">Show Tunas</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/fishes/salmons">Show Salmons</NavLink>
          </li>
        </ul>
        <Route path="/fishes/:fishtype" render={({ match }) => <DepictSpecificInfoFish match={match} />} />
      </>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dist">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fishes">Fishes</NavLink>
            </li>
          </ul>

          <div className="container">
            <div className="jumbotron">
              <Route path="/dist" exact render={() => <h1>Welcome Page</h1>} />
              <Route path="/fishes" component={FishesSection} />
            </div>
          </div>
        </>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
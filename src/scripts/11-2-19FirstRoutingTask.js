import React from 'react';

export class RoutingTask extends React.Component {

    render() {
        return (

            <React.Fragment>
                <ul>
                    <li className="nav-item">
                        <navLink className="nav-link" to="/showSomething">Show Something</navLink>
                    </li>
                    <li className="nav-item">
                        <navLink className="nav-link" to="/goFishSection">Go Fish Section !</navLink>
                    </li>
                </ul>
                <div className="container">
                    <div className="jumbotron">
                        <Route path="/showSomething" exact render={() => <h1> Show Something </h1>} />
                        <Route path="/goFishSection" exact render={() => <h1>Show Something</h1>} />
                    </div>
                </div>
            </React.Fragment>


        )
    }
}
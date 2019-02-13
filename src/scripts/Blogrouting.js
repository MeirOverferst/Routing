import '../styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

class NavList extends React.Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dist">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/create">Create A Post</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/show">Show Posts</NavLink>
                </li>
            </ul>
        )
    }
}
class Welcomer extends React.Component {
    render() {
        return <h2 className="display-2">Welcome to our Blog site!</h2>;
    }
}
class SinglePost extends React.Component {
    render() {
        return (
            <div className="card my-2">
                <div className="card-header">
                    <h3 className="title text-center">{this.props.postInfo.title}</h3>
                </div>
                <div className="card-body">
                    <p className="lead">{this.props.postInfo.content}</p>
                </div>
                <div className="card-footer">
                    <p className="lead"><strong>{this.props.postInfo.author} </strong>
                        wrote at: {this.props.postInfo.date.getDate()}/{this.props.postInfo.date.getMonth() + 1}/{this.props.postInfo.date.getFullYear()}
                    </p>
                </div>
            </div>
        )
    }
}
class ShowPosts extends React.Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="title">Select a blog post to examine</h2>
                <div className="container">
                    {this.props.allPosts.map((postInfo, index) => {
                        return (
                            <NavLink to={'/singlepost/' + index} key={index}>
                                <SinglePost postInfo={postInfo} />
                            </NavLink>
                        )
                    })
                    }

                </div>
            </React.Fragment>
        )
    }
}

class CreatePost extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.createPost}>
                <div className="input-group mb-3 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Your username:</span>
                    </div>
                    <input type="text" className="form-control" onChange={this.props.changeAuthor} value={this.props.postInfo.author} />
                </div>
                <div className="input-group mb-3 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Your blog title:</span>
                    </div>
                    <input type="text" className="form-control" onChange={this.props.changeTitle} value={this.props.postInfo.title} />
                </div>
                <div className="input-group mb-3 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Your blog post:</span>
                    </div>
                    <textarea className="form-control" onChange={this.props.changeContent} value={this.props.postInfo.content}></textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-success">Create a post</button>
            </form>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], postAuthor: '', postTitle: '', postContent: '', date: undefined };
    }

    createPost(event) {
        event.preventDefault();
        const postsCopy = [...this.state.posts];
        const currentDate = new Date();
        postsCopy.push({ author: this.state.postAuthor, title: this.state.postTitle, content: this.state.postContent, date: currentDate });
        this.setState({ posts: postsCopy, postAuthor: '', postTitle: '', postContent: '', date: currentDate });
    }

    changeAuthor(event) {
        let authorCopy = this.state.postAuthor;
        authorCopy = event.target.value;
        this.setState({ postAuthor: authorCopy });
    }

    changeTitle(event) {
        let titleCopy = this.state.postTitle;
        titleCopy = event.target.value;
        this.setState({ postTitle: titleCopy });
    }

    changeContent(event) {
        let contentCopy = this.state.content;
        contentCopy = event.target.value;
        this.setState({ postContent: contentCopy });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <NavList />
                    <div className="jumbotron">
                        <Route path="/dist" exact component={Welcomer} />
                        <Route path="/create" exact render={() => {
                            return (<CreatePost createPost={this.createPost.bind(this)}
                                changeAuthor={this.changeAuthor.bind(this)}
                                changeTitle={this.changeTitle.bind(this)}
                                changeContent={this.changeContent.bind(this)}
                                postInfo={{ author: this.state.postAuthor, title: this.state.postTitle, content: this.state.postContent }}
                            />)
                        }} />

                        <Switch>
                            <Route path="/show" exact render={() => <ShowPosts allPosts={this.state.posts} />} />
                            <Route path={'/singlepost/:id'} exact render={({ match }) => {
                                const tempPosts = [...this.state.posts];
                                const createInfoObject = tempPosts[match.params.id];
                                return <SinglePost postInfo={createInfoObject} />;
                            }} />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('blogrouting'));
import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import { logout } from './Auth.redux';

function Second() {
    return <h1>This is second!</h1>
}

function Third() {
    return <h1>This is third!</h1>
}

@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const match = this.props.match;
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <h1>button</h1>
                {this.props.isAuth ? <button onClick={this.props.logout}>logout</button> : null}
                <ul>
                    <li>
                        <Link to={`${match.url}`}>first item</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/second`}>second item</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/third`}>third item</Link>
                    </li>
                </ul>
                <Route path={`${match.url}`} exact component={App}></Route>
                <Route path={`${match.url}/second`} component={Second}></Route>
                <Route path={`${match.url}/third`} component={Third}></Route>
            </div>
        );
        return this.props.isAuth ? app : redirectToLogin;
    }
}

export default Dashboard;
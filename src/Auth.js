import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './Auth.redux';
import { Redirect } from 'react-router-dom';

@connect(
    state=>state.auth,
    {login}
)
class Auth extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                { this.props.isAuth ? <Redirect to='/dashboard' /> : null }
                <h2>You do not have authorization</h2>
                <button onClick={this.props.login}>Login</button>
            </div>
        );
    }
}

export default Auth;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, getUserData } from './Auth.redux';
import { Redirect } from 'react-router-dom';

@connect(
    state=>state.auth,
    {login, getUserData}
)
class Auth extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
        this.props.getUserData();
        // axios.get('/data')
        //     .then(res => {
        //         console.log(res.data);
        //     })

    }
    render() {
        return (
            <div>
                <h2>my name is {this.props.user}, age {this.props.age}</h2>
                { this.props.isAuth ? <Redirect to='/dashboard' /> : null }
                <h2>You do not have authorization</h2>
                <button onClick={this.props.login}>Login</button>
            </div>
        );
    }
}

export default Auth;
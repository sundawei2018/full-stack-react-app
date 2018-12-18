import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem,Radio, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register() {
        console.log(this.props);
        this.props.history.push('/register');
    }
    render() {
        return (
            <div>
                <Logo></Logo>
                <h2>Login Page</h2>
                <WingBlank>
                    <List>
                        <InputItem>Username</InputItem>
                        <WhiteSpace />
                        <InputItem>Password</InputItem>
                        <WhiteSpace />
                    </List>
                    <Button type='primary'>login</Button>
                    <WhiteSpace />
                    <Button onClick={this.register} type='primary'>sign up</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login;
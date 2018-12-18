import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import { InputItem, List, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'applicant' // or employer
        }
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <h2>Registeration Page</h2>
                <WhiteSpace />
                <List>
                    <InputItem>Username</InputItem>
                    <InputItem>Password</InputItem>
                    <InputItem>Confirm</InputItem>
                </List>
                <WhiteSpace />
                <RadioItem checked = {this.state.type =='applicant'}>
                    applicant
                </RadioItem>
                <RadioItem checked = {this.state.type =='employer'}>
                    employer
                </RadioItem>
                <WhiteSpace />
                <Button type='primary'>Register</Button>
            </div>
        );
    }
}

export default Register;
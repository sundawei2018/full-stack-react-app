import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import { InputItem, List, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';

@connect(
    state => state.user,
    {register}
)
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'applicant' // or employer
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleChange(key, val) {
        this.setState({
            [key]: val
        });
    }

    handleRegister() {
        this.props.register(this.state);
    }

	render(){
		const RadioItem = Radio.RadioItem;
		return (
			<div>
                {this.props.redirectTo? <Redirect to={this.props.redirectTo} />:null}
				<Logo></Logo>
				<List>
                    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
					<InputItem
						onChange={v=>this.handleChange('user',v)}
					>Username</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						onChange={v=>this.handleChange('pwd',v)}
					>Password</InputItem>
					<WhiteSpace />
					<InputItem
						type='password'
						onChange={v=>this.handleChange('repeatpwd',v)}
					>Confirm</InputItem>
					<WhiteSpace />
					<RadioItem
						checked={this.state.type=='applicant'}
						onChange={()=>this.handleChange('type','applicant')}
					>
						applicant
					</RadioItem>
					<RadioItem
						checked={this.state.type=='employer'}
						onChange={()=>this.handleChange('type','employer')}
					>
						employer
					</RadioItem>
					<WhiteSpace />
					<Button type='primary' onClick={this.handleRegister}>Sign Up</Button>
				</List>
			</div>
		)
	}
}

export default Register;
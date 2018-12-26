import React, { Component } from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { connect } from 'react-redux';
import { update } from '../../redux/user.redux';
import {Redirect} from 'react-router-dom';

@connect(
	state=>state.user,
	{update}
)
class ApplicantInfo extends Component {
    constructor(props) {
		super(props)
		this.state = {
			title:'',
			intro:''
		}
    }
    onChange(key,val){
		this.setState({
			[key]:val
		})
	}
    render() {
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return (
            <div>
                {redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect>:null}
                <NavBar mode="dark">Applicant Infomation Page</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                        this.setState({
                            avatar: imgname
                        });
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>
                    Position
                </InputItem>
                <TextareaItem 
                    onChange={(v) => this.onChange('intro', v)}
                    rows={3}
                    autoHeight
                    title='Introduction'>
                </TextareaItem>
                <Button 
                    onClick={()=>{
                        this.props.update(this.state);
                    }}
                    type='primary'
                >Save</Button>
            </div>
        );
    }
}

export default ApplicantInfo;
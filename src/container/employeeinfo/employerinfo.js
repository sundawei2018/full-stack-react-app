import React, { Component } from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';

class EmployerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            company: '',
            salary: '',
            description: ''
        };

    }
    onChange(key, val) {
        this.setState({
           [key]: val 
        });
    }

    render() {
        return (
            <div>
                <NavBar mode="dark">Employer Infomation Page</NavBar>
                <AvatarSelector
                    selectAvatar={(imgname) => {
                        this.setState({
                            avatar: imgname
                        });
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>
                    Positions
                </InputItem>
                <InputItem onChange={(v) => this.onChange('company', v)}>
                    Company
                </InputItem>
                <InputItem onChange={(v) => this.onChange('salary', v)}>
                    Salary
                </InputItem>
                <TextareaItem 
                    onChange={(v) => this.onChange('description', v)}
                    rows={3}
                    autoHeight
                    title='Description'>
                </TextareaItem>
                <Button type='primary'>Save</Button>
            </div>
        );
    }
}

export default EmployerInfo;
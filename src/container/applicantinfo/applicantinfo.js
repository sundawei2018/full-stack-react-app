import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';


class ApplicantInfo extends Component {
    render() {
        return (
            <div>
                <NavBar mode="dark">Applicant Infomation Page</NavBar>
                <AvatarSelector></AvatarSelector>
                
            </div>
        );
    }
}

export default ApplicantInfo;
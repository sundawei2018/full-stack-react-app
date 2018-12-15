import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';
import { Button } from 'antd-mobile';
//import 'antd-mobile/dist/antd-mobile.css';

@connect(
  (state) => ({num: state.counter}), 
  {addGun, removeGun, addGunAsync}
)

class App extends Component {
  render() {
    return (
      <div>
        <h1>current guns: {this.props.num}</h1>
        <Button type='primary' onClick={this.props.addGun}>require more guns</Button>
        <Button type='primary' onClick={this.props.removeGun}>hand in guns</Button>
        <Button type='primary' onClick={this.props.addGunAsync}>hand in guns later</Button>
      </div>
      
    );
  }
}

export default App;

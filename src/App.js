import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';

class App extends Component {
  render() {
    // const store = this.props.store;
    // const num = store.getState();
    return (
      <div>
        <h1>current guns: {this.props.num}</h1>
        <button onClick={this.props.addGun}>require more guns</button>
        <button onClick={this.props.removeGun}>hand in guns</button>
        <button onClick={this.props.addGunAsync}>hand in guns later</button>
      </div>
      
    );
  }
}

const mapStatetoProps = (state) => {
  return {num: state}
}

const actionCreators = {addGun, removeGun, addGunAsync}
App = connect(mapStatetoProps, actionCreators)(App)
export default App;

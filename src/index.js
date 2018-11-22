import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { counter, addGun, removeGun, addGunAsync } from './index.redux';
import { counter } from './index.redux';


const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// ReactDOM.render(
//     <App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, 
// document.getElementById('root')
// );

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider> ),
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { counter } from './index.redux';


const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// ReactDOM.render(
//     <App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, 
// document.getElementById('root')
// );

function Second() {
    return <h1>This is second!</h1>
}

function Third() {
    return <h1>This is third!</h1>
}

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to='/'>first item</Link>
                    </li>
                    <li>
                        <Link to='/second'>second item</Link>
                    </li>
                    <li>
                        <Link to='/third'>third item</Link>
                    </li>
                </ul>
                <Route path="/" exact component={App}></Route>
                <Route path="/second" component={Second}></Route>
                <Route path="/third" component={Third}></Route>
            </div>
        </BrowserRouter>
        
    </Provider> ),
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/Authroute/authroute';
import ApplicantInfo from './container/applicantinfo/applicantinfo';
import EmployerInfo from './container/employeeinfo/employerinfo';

import reducer from './reducer';
import './config';
import './index.css';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//console.log(store.getState());

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/applicantinfo' component={ApplicantInfo}></Route>
                    <Route path='/employerinfo' component={EmployerInfo}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider> ),
    document.getElementById('root')
);


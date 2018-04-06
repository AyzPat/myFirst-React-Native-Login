import React , { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import SimpleForm from './components/SimpleForm.js';
import { Field, reduxForm } from 'redux-form';
import MainContainer from './components/MainContainer.js';
const store = createStore(allReducers);
 export default class Application extends Component{
  render(){
    return(
      <Provider store= {store}>
      <MainContainer/>
      </Provider>
    )
  }
}
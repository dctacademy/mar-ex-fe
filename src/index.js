// es6 module loader - FE
import React from 'react'; // const React = require('react')
import ReactDOM from 'react-dom/client';
import App from './App' // const App = require('./App')
// import RegisterComponent from './exercises/Register';
// import Login from './exercises/Login';
// import StateExample from './exercises/StateExample';
// import Counter from './exercises/Counter';
// import Show from './exercises/Show';
// import TaskList from './exercises/TaskList';
// import StringVowel from './exercises/StringVowel';
// import EmployeesList from './exercises/Employees';
// import Remove from './exercises/Remove';
// import CountryList from './exercises/Countries';
// import MainComponent from './exercises/MainComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <App />
);


// common js module loader - BE 
// const express = require('express')
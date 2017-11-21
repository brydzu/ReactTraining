import React from 'react';        // library which allows us to build react component
import ReactDOM from 'react-dom'; // library that allows us to place our components and work with them in
                                  // contexof the DOM
// import App from './App';          // importing the component from App.js (tutaj H1 z napisem)
// import App2 from './App2';
import App3 from "./App3";
import Lesson7 from "./Lesson7";

// ReactDOM.render(                    // używamy tego do renderowania komponentu... <app />
//     <App />,   // to render that component in js format to the..
//     document.getElementById('root') // target we've created (div with ID of "root")
// );
//
// ReactDOM.render(                    // używamy tego do renderowania komponentu... <app />
//     <App2 />,                        // to render that component in js format to the..
//     document.getElementById('root2') // target we've created (div with ID of "root")
// );

// ReactDOM.render(
//     <App3/>,
//     document.getElementById('root3')
// );

ReactDOM.render(
    <Lesson7/ >,
    document.getElementById('root4')
)


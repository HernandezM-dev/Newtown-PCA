import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

window.onscroll = () =>{
  console.log('im scrolling')
  // e.preventDefault();
  // Get the header
  var header = document.getElementById("headerContainer");
  var placeHolder = document.getElementById("headerPlaceholder")
  console.log(header)

// Get the offset position of the navbar
var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    placeHolder.classList.remove("display");
    header.classList.add("sticky");
  } else {
    placeHolder.classList.add("display");
    header.classList.remove("sticky");

  }

}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

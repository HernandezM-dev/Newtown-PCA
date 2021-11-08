import React from 'react';
import logo from './logo.svg';
import Header from '../src/components/Header.js';
import { Switch, Route } from 'react-router-dom';


import './sass/App.scss';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Calendar from './components/Calendar'; 
import Documents from './components/Documents'; 
import Notices from './components/Notices'; 

function App() {

  return (
    <div className="App">
      <Header/>
      <div class="display" id="headerPlaceholder"></div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/calendar' component={Calendar} />
        <Route path='/documents' component={Documents} />
        <Route path='/notices' component={Notices} />
        {/* <Route path='/contact' component={ContactPage} /> */}
        {/* <Route path='/about' component={AboutPage} />
       */}
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

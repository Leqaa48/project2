import React from 'react';
import Nav from './component/nav';
import Post from './component/post';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './component/footer';
import Background from './background'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router >
        <div class="bar">
          
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="post" /> </Link>
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4"><Post value=" post" /></Link>
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="post" /> </Link>
       
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="post" /> </Link>
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4"><Post value=" post" /></Link>
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="post" /> </Link>
        
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="post" /> </Link>
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4"><Post value=" post" /></Link>
          <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="post" /> </Link>
        </div>
        <Footer  />
      </Router>
    </div>
  );
}

export default App;

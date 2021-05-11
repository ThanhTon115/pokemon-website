import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignUp from './component/pages/SignUp';
{/* 
<Router>: The router that keeps the UI in sync with the URL
<Link>: Renders a navigation link
<Route>: Renders a UI component depending on the URL 
*/}

function App() {
  return (
    <>
    <Router>
      <Navbar/>  
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/services" component={Services}/>
        <Route path ="/products" component={Products}/>
        <Route path ="/sign-up" component={SignUp}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;

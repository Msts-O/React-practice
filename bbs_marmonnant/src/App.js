import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/projects/Details";
import SignUp from "./components/auth/SignUp";
import CreateProjects from './components/projects/CreateProjects';
import './App.css'
import SignIn from "./components/auth/SignIn";



class App extends Component{
    render() {
     return(
       <BrowserRouter>
         <div classname="App">
            <Navbar/>
           <Switch>
             <Route exact path='/' component={Dashboard}/>
             <Route path='/project/:id' component={ Details }/>
             <Route path='/signIn' component={ SignIn }/>
             <Route path='/signUp' component={ SignUp }/>
             <Route path='/create' component={ CreateProjects } />
           </Switch>
        </div>
        </BrowserRouter>
     );
    }
}
export default App;

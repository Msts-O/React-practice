import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/layouts/Navbar';
import Dashboard from "./Components/Projects/Dashboard";
import Details from "./Components/ProjectDetails/Details";
import Signup from "./Components/Writers/Signup";
import Signout from "./Components/Writers/Signout";
import CreateProjects from "./Components/ProjectDetails/CreateProjects";
import './App.css'



class App extends Component{
    render() {
     return(
       <BrowserRouter>
         <div classname="App">
            <Navbar/>
           <Switch>
             <Route exact path='/' component={Dashboard}/>
             <Route path='/project/:id' component={ Details }/>
             <Route path='/signup' component={ Signup }/>
             <Route path='/signout' component={ Signout }/>
             <Route path='/create' component={ CreateProjects } />
           </Switch>
        </div>
        </BrowserRouter>
     );
    }
}
export default App;

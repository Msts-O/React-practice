import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from "./Projects/Dashboard";
import Details from "./ProjectDetails/Details";
import Signup from "./Writers/Signup";
import Signout from "./Writers/Signout";
import CreateProjects from "./ProjectDetails/CreateProjects";

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

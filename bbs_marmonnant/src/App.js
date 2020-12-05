import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from "./Projects/Dashboard";
import Details from "./ProjectDetails/Details";

class App extends Component{
    render() {
     return(
       <BrowserRouter>
         <div classname="App">
            <Navbar/>
           <Switch>
             <Route path='/' component={Dashboard}/>
             <Route path='/project/:id' component={ Details }/>
           </Switch>
            </div>
        </BrowserRouter>
     );
    }
}
export default App;

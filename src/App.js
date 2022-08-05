import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./App.css";
import 'bootswatch/dist/materia/bootstrap.min.css'; // Added this :boom:
import Detail from "./Detail";
import Footer from "./Footer";
import Menu from "./Menu";
import About from "./About";
function App(){
    return(
    
    
       <Router>
        <Menu />
        <div className="container"> 

         <Switch>
        
        <Route path="/" exact component={Detail} />
      
        <Route path="/about" exact component={About} />
        
        </Switch>

        </div>

        <Footer />

        </Router>
  
   
);
}

export default App;
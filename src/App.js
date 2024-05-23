import React from "react";
import ClassExample from "./ClassExample";
import Child1 from "./Child1";
import { BrowserRouter,Routes,Route } from "react-router-dom"

// componentas
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
// navigation import
import Navigation from "./components/Navigation";
// class component
class App extends React.Component{
  // render is available in react component
  render(){
    return(
      <div>
        <BrowserRouter>
        <Navigation/>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
           </Routes>

        </BrowserRouter>
        {/* <p>App js file</p>
        <p>This is about class component</p>
        <ClassExample/>
        <Child1 name="samreen" age="23"/>
        <Child1 name="neha" age="23"/> */}
      </div>
    )
  }
  
}
export default App
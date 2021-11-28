import React from 'react'
import App from "./App"
import List from "./List"
import "./Linko.css"
import { BrowserRouter,Route,Routes,Link} from "react-router-dom"
// import Update from './Update'
const Linko = () => {
    return (
        <>
       
    
        <BrowserRouter>
        <div class="header">
          <h2>Students Details Form </h2>
            </div>
        <div class="topnav">
       
        <Link to="/list"><a>Details</a> </Link>
        <Link to="/"><a>Home</a></Link>
       
      
      
        </div>
        <Routes>
          <Route exact path="/" element={<App/>}/> 
          <Route exact path="/list" element={<List/>}/>  
          {/* <Route exact path="/update/:id" component={Update}/>   */}
     </Routes>
      </BrowserRouter>
      </>
    )
}

export default Linko

// import React from "react";
// import {BrowserRouter , Router, Switch, Route} from "react-router-dom";
// import  home  from "./pages/home";

// function App  () {
//    return (
//       <BrowserRouter>
//       <h1>heloo welcome to react pages</h1>
//          <Switch>
//             <Route path="/" element={<home />}></Route>
//          </Switch>
//       </BrowserRouter>
   
//    );
// }
// export default App;

import { BrowserRouter as Router, Route, Link, Routes }
    from "react-router-dom";

// Import the pages
import { React } from "react";
//import { Home } from "./pages/Home";
import { About } from "./pages/about.jsx";



function App() {
    return (
        
            <Router>
                <Routes>
                   {/* // <Route  path="/" element={<h1>Home Page</h1>} /> */}
                    <Route  path="/about" element={<About></About>} />
                    
                </Routes>
                
            </Router>
   
    );
}
export default App;
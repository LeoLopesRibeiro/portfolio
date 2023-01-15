import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

function Rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects"  element={<Projects/>}/>
            <Route exact path="/education" element={<Education/>} />
        </Routes>
    </BrowserRouter>
    )
}
export default Rotas;
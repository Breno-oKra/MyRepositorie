import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Project } from "../pages/Projects";
import { Home } from "../pages/home";

export function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Project/>} />
            </Routes>
        </BrowserRouter>
    )
}
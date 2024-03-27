import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header";
import List from "../components/List";
import Add from "../components/Add";
import useLocalStorage from "../hooks/useLocalStorage";
import Edit from "../components/Edit";
import ElementContext from "../context/ElementContext";

const ApplicationRouter = () => {

    const [elements, setElements] = useLocalStorage("elements", []);

    return (
        <BrowserRouter>
            <Header />
            <div className="main-container">
                <ElementContext.Provider value={{ elements, setElements }}>
                    <Routes>
                        <Route exact path="/" element={<List elements={elements} setElements={setElements} />} />
                        <Route path="/add" element={<Add elements={elements} setElements={setElements} />} />
                        <Route path="/edit/:id" element={<Edit elements={elements} setElements={setElements} />} />
                        <Route element={() => <Navigate to="/" />} />
                    </Routes>
                </ElementContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default ApplicationRouter;
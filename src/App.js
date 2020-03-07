import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import AppLayout from "./components/layout/AppLayout";

function App() {
    return (
        <Router>
            <div className="App">
                <AppLayout/>
            </div>
        </Router>
    );
}
export default App;

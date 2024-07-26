import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Left from "./parts/left";

function App() {
    return (
        <Router>
            <div className="app">
                <Left/>
                <div className="right">
                    <Routes>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

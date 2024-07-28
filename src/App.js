import './bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Left from "./parts/left";
import SettingsPage from "./parts/settings-page";
import NavBar from "./components/nav-bar";

function App() {
    return (
        <Router>
            <NavBar/>
            <div className="app">
                <Left/>
                <div className="right">
                    <Routes>
                        <Route path="/sozlamalar" element={<SettingsPage/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

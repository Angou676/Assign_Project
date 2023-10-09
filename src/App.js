import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Packages from "./pages/Packages";
import Events from "./pages/Events";
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          <Route path="/pack" exact element={<Packages/>} />
          <Route path="/event" exact element={<Events/>} />
          <Route path="/blogs" exact element={<Blogs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/NavComponent/Header/Header";
import Dashboard from "./pages/Dashboard";
import Trial from "./Trial";

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Trial/> */}
    </div>
  );
}

export default App;

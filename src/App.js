import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Add from "./pages/Add";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
import Aggregate from "./pages/Aggregate";
import Info from "./pages/Info";
import Secondary from "./pages/Secondary";



function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aggregate" element={<Aggregate/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/employees" element={<Employees/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/secondary" element={<Secondary/>}/>
        </Routes>
      </Router>
  );
}

export default App;
    
    




      
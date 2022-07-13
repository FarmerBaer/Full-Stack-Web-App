import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Add from "./pages/Add";
import Delete from "./pages/Delete";
import Home from "./pages/Home";
import Aggregate from "./pages/Aggregate";
import Info from "./pages/Info";
import Secondary from "./pages/Secondary";
import Sign from "./pages/Sign";

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Sign/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/aggregate" element={<Aggregate/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/secondary" element={<Secondary/>}/>
        </Routes>
      </Router>
  );
}

export default App;
    
    




      
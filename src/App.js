import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Add from "./pages/Add";
import Employees from "./pages/Employees";



function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Add/>}/>
        <Route path="/employees" element={<Employees/>}/>
        </Routes>
      </Router>
  );
}

export default App;
    
    




      
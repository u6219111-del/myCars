import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/vehicles" />} /> 
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/car/:id" element={<Details />} />    
      </Routes>
    </Router>
  );
}

export default App;

import axios from "axios"
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" components={<h2>Test</h2> } />
    </Routes>
    </div>
  );
}

export default App;

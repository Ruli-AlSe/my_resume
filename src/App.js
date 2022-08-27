import { Routes, Route } from "react-router-dom";
import MyCV from "./pages/MyCV";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyCV />} />
      </Routes>
    </div>
  );
}

export default App;

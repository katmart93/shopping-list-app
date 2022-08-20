import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Home from "./pages/Home";
import SingleList from "./pages/SingleList";
// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-list" element={<SingleList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import "@shopify/polaris/build/esm/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewData from "./components/ViewData";
import Home from "./components/Home";

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewdata/:id" element={<ViewData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import CharacterDetails from "./Components/CharacterDetails";
import Characters from "./Components/Characters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/:id" element={<CharacterDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

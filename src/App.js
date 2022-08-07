import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Tickets from "./components/tiketsPage/TiketsPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tikets" element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;

import { Provider } from "react-redux";
import { store } from "./store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Dev from "./pages/Developer";
import Exec from "./pages/Exec";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WhoAmI" element={<Dev />} />
          <Route path="/Download" element={<Exec />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

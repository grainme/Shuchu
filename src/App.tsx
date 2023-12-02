import { Provider } from "react-redux";
import { store } from "./store";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

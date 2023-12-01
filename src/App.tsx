import { Footer } from "./mainParts/Footer";
import { NavBar } from "./mainParts/NavBar";
import { Body } from "./mainParts/body";

function App() {
  return (
    <div className="flex flex-col justify-between items-center min-h-[100vh] bg-[#000000]">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

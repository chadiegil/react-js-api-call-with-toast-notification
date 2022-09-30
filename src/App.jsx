import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </>
  );
}

export default App;

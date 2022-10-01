import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./components/pages/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:userId" element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

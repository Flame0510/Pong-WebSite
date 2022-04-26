import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/home/Home";
import Pong from "./pages/threejs/3DPong";

function App() {
  return (
    <Router>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="icon" href={require("./assets/images/pong/logo.png")} />
        <title>Pong</title>
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pong" element={<Pong />} />
      </Routes>
    </Router>
  );
}

export default App;

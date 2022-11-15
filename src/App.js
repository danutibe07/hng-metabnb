import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Placetostay from "./Components/PlaceToStay/Placetostay";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/placetostay" element={ <Placetostay />}/>
        </Routes>

      <Footer />
    </div>
  );
}

export default App;

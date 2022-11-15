import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Placetostay from "./Components/PlaceToStay/Placetostay";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter basename="hng-metabnb" >
        <Routes>
          <Route exact path="/" element={ <Home />}/>
          <Route path="/placetostay" element={ <Placetostay />}/>
        </Routes>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CartPage from "./Pages/CartPage";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
         <Route path="/" element={<Homepage />}/>
         <Route path="/home" element={<Homepage />}/>
         <Route path="/cart" element={<CartPage />} />
      </Routes>

    </div>
  );
}

export default App;

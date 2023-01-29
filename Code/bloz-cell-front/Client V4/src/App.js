import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductoSalida from "./pages/productoSalida";
import IngresoProducto from "./pages/ingresoProducto";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/ventas" element={<ProductoSalida />} />
        <Route path="/administrar" element={<IngresoProducto />} />
      </Routes>
    </>
  );
}
export default App;

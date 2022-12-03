import { Route, Routes } from "react-router-dom";
import { CynthiaRocumback } from "./pages/CynthiaRocumback";
import { CarlosAbreu } from "./pages/CarlosAbreu";
import { Home } from "./pages/Home";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cynthia-rocumback" element={<CynthiaRocumback/>} />
      <Route path="/carlos-abreu" element={<CarlosAbreu />} />
    </Routes>
  );
}
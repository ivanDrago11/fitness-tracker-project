import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/" element={<MainLayout />} />
    </Routes>
  );
}

export default App;

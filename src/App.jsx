import { Outlet } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
}

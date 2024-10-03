import { Outlet } from "react-router-dom";
import { useUserContext } from '../context/UserContext';
import Footer from '../components/Footer.jsx'
import Navbar from "../components/NavBar.jsx";


const LayoutPublic = () => {

  return (
    <>
     <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutPublic;
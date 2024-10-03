import { Outlet } from "react-router-dom";
import { useUserContext } from '../context/UserContext';
import Footer from '../components/Footer.jsx'
import Navbar from "../components/NavBar";

const LayoutPublic = () => {

  return (
    <>
      <Navbar />
      {userAuth && <LogOutButton />}
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutPublic;
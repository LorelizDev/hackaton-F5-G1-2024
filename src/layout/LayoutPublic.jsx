import { Outlet } from "react-router-dom";
import { useUserContext } from '../context/UserContext';
import Footer from '../components/Footer.jsx'


const LayoutPublic = () => {

  return (
    <>
     
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutPublic;
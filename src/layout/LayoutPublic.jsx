import { Outlet } from "react-router-dom";
import LogOutButton from "../components/LogOutButton";
import { useUserContext } from '../context/UserContext';
import Footer from '../components/Footer.jsx'


const LayoutPublic = () => {
  const { userAuth } = useUserContext();
  return (
    <>
      {userAuth && <LogOutButton />}
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutPublic;
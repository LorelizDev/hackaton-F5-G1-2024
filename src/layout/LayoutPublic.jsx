import { Outlet } from "react-router-dom";
import LogOutButton from "../components/LogOutButton";
import { useUserContext } from '../context/UserContext';
import Navbar from "../components/NavBar";


const LayoutPublic = () => {
  const { userAuth } = useUserContext();
  return (
    <>
      <Navbar/>
      {userAuth && <LogOutButton />}
      <Outlet />
    </>
  )
}

export default LayoutPublic;
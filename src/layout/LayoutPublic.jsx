import { Outlet } from "react-router-dom";
import LogOutButton from "../components/LogOutButton";
import { useUserContext } from '../context/UserContext';

const LayoutPublic = () => {
  const { userAuth } = useUserContext();
  return (
    <>
      {userAuth && <LogOutButton />}
      <Outlet />
    </>
  )
}

export default LayoutPublic;
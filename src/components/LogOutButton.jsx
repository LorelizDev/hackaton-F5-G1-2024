import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';


const LogOutButton = () => {
  const { setUser, setUserAuth, setUserRole } = useUserContext();
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setUserAuth(null);
    setUserRole(null);
    return navigate("/");
  }

  return (
    <button onClick={handleLogOut} className="text-sm bg-dark text-light font-bold px-3 py-1 m-1 rounded-xl hover:bg-opacity-70">
      <p>Salir</p>
    </button>
  );
}

export default LogOutButton;
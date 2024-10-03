import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

const LayoutPublic = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default LayoutPublic;
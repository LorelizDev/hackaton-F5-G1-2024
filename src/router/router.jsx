import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layout/LayoutPublic";
import ErrorBoundary from "../components/ErrorBoundary";
import Register from "../pages/Register";
import Resources from "../pages/Resources";
import Forum from "../pages/Forum";
import Login from "../pages/Login";
import ChatBot from "../pages/ChatBot";
import Saviour from "../pages/Saviour";
import Courses from "../pages/Courses";
import MySpace from "../pages/MySpace";
import Community from "../pages/Community";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/resources",
        element: <Resources/>,
      },
      {
        path: "/saviours",
        element: <Saviour/>,
      },
      {
        path: "/chat",
        element: <ChatBot/>,
      },
      {
        path: "/forum",
        element: <Forum/>,
      },
      {
        path: "/myspace",
        element: <MySpace />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/community",
        element: <Community />,
      }
    ]
  }  
]);

export default router;
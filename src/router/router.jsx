import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layout/LayoutPublic";
import ErrorBoundary from "../components/ErrorBoundary";
import Register from "../pages/Register";
import Resources from "../pages/Resources";
import Community from "../pages/Comunity";
import Saviour from "../pages/Saviour";
import Login from "../pages/Login";
import ChatBot from "../pages/ChatBot";

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
        path: "/chatbot",
        element: <ChatBot/>,
      },/*
      {
        path: "/contact",
        element: <Contact/>
      }, */
      {
        path: "/community",
        element: <Community/>
      }
    ]
  }  
]);

export default router;
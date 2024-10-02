import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layout/LayoutPublic";
import ErrorBoundary from "../components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  }  
]);

export default router;
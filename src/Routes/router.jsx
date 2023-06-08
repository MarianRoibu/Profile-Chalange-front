import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, HomePage, Register, ProfilePage,} from "../UI/pages/users";
import PrivateRoutes from "./RouteTypes";


const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },    
    {
      path: '/',
      element: <HomePage />
    },

    {
      path: '/profile',
      element: <PrivateRoutes><ProfilePage /></PrivateRoutes>
    },
  ]);
  
  export default function Router() {
    return <RouterProvider router={router} />;
  }
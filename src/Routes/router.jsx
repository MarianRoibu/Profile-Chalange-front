import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, HomePage, Register, ProfilePage, UserEdit} from "../UI/pages/users";
import PrivateRoutes from "./RouteTypes";


const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },    
    {
      path: '/home',
      element: <PrivateRoutes>  <HomePage /> </PrivateRoutes>
    },

    {
      path: '/profile',
      element: <PrivateRoutes><ProfilePage /></PrivateRoutes>
    },

    {
      path: '/edit',
      element: <PrivateRoutes><UserEdit /></PrivateRoutes>
    },
  ]);
  
  export default function Router() {
    return <RouterProvider router={router} />;
  }
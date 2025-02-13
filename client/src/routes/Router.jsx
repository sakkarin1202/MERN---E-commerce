import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Main";
import Home from "../pages/Home/Index";
import Shop from "../pages/Shop/Index";
import Cart from "../pages/Cart/Index";
import SignUp from "../components/SignUp";
import SignIn from "../components/SingIn";
import UpdateProfile from "../components/UpdateProfile";
import ProfileUser from "../components/ProfileUser";
import ProtectPage from "../pages/ProtectPage/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: (
          <ProtectPage>
            <Cart />
          </ProtectPage>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/updateProfile",
        element: (
          <ProtectPage>
            <UpdateProfile />
          </ProtectPage>
        ),
      },
      {
        path: "/profileUser",
        element: (
          <ProtectPage>
            <ProfileUser />
          </ProtectPage>
        ),
      },
    ],
  },
]);
export default router;

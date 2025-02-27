import { createBrowserRouter } from "react-router-dom";
import DashboarLayout from "../Layout/DashboarLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
 import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import Adddoctors from "../Pages/Dashboard/AddDoctors/Adddoctors";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import About from "../Pages/Shared/About/About";
import Payment from "../Pages/Dashboard/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",

    element: (
      <PrivateRoute>
        <DashboarLayout></DashboarLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },

      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            {" "}
            <Adddoctors></Adddoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            {" "}
            <ManageDoctors />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myappointment",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`https://doctors-portal-server-six-theta.vercel.app/bookings/${params.id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken-portal")}`,
            },
          }),
        element: <Payment></Payment>,
      },
      
    ],
  },
]);
export default router;

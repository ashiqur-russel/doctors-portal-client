import { createBrowserRouter } from "react-router-dom";
import DashboarLayout from "../Layout/DashboarLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import Adddoctors from "../Pages/Dashboard/AddDoctors/Adddoctors";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
  },
]);
export default router;

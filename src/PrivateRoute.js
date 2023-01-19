import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  // console.log(children)
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
    // return {user}?<Outlet/>: <Navigate to="/login" />;
  }
};
export default PrivateRoute;

// import { Navigate } from "react-router-dom";

// import { useAuthStore } from "../store/authStore";

// const PrivateRoute = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const token = useAuthStore((state) => state.token);

//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   return <>{children}</>;
// };

// export default PrivateRoute;

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function PrivateRoute() {
  const location = useLocation();

  const token = useAuthStore((state) => state.token);

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return <Outlet />;
}
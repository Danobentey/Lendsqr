import {
  Route,
  RouterProvider,
  // Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// import RootLayout from "./Layout/RootLayout";
import ViewAllUsers from "./views/pages/Users/ViewAllUsers";
import Dashboard from "./components/Dashboard/Dashboard";
import { Layout, pageRoutes } from "./variables/pageRoutes";
import { AuthProvider } from "./utils/authUtils";
import { Login } from "./views/Auth/Login";
import RootLayout from "./Layout/RootLayout";
import ViewUserDatails from "./views/pages/Users/ViewUserDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={Layout.Admin} element={<RootLayout />}>
        <Route path={pageRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={pageRoutes.ALL_USERS} element={<ViewAllUsers />} />
        <Route path={`${pageRoutes.USERS}/:userId`} element={<ViewUserDatails />} />
      </Route>
      <Route path={Layout.Auth}>
        <Route path="/*" element={<Login />} />
        <Route path={pageRoutes.LOGIN} element={<Login />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;

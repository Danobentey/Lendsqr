import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;

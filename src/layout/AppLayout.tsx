import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="bg-blue-primary-color-0">
      <Navbar />
      <main className="relative flex h-[80vh] w-full items-center  justify-around p-12 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

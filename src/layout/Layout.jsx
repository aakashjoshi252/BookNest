import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
// import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <main className="d-flex gap-4 rounded-4 container my-4">
        {/* <Sidebar /> */}
        <div className="flex-grow-1">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
}

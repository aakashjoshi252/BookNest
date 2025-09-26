import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
// import Sidebar from "../components/sidebar/Sidebar"
import Footer from "../components/footer/Footer"
export default function Layout(){
    return(
        <>
       <Navbar style={{}} />

           <div className="d-flex gap-4 round-4">
            {/* <Sidebar/> */}
            <Outlet/>
            </div>
            <Footer/>
            

        </>
    )
}
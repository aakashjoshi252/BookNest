import { Outlet } from "react-router-dom"
import Books from "./books/Books"
export default function Home(){
    return(
        <>
            <Books/>
            <Outlet/>
            
        </>
    )
}
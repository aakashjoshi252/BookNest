import { Outlet } from "react-router-dom";
import Books from "./books/Books";
import Carousel from "../components/carousel/Carousel";

export default function Home() {
  return (
    <>
    <Carousel/>
        <Books />
        <Outlet />
    </>
  );
}

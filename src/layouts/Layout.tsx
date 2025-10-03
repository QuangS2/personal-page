import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main style={{ minHeight: "80vh"}}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
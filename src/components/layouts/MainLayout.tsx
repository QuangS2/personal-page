import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box } from "@mui/system";

export default function MainLayout() {
    return (
        <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", 
      }}>
            <Navbar />
            <main style={{ minHeight: "80vh",backgroundColor: "#fafafa", flexGrow: 1}}>
                <Outlet />
            </main>
            <Footer />
        </Box>
    );
}
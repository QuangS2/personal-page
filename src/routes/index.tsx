import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layouts/Layout";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export default function AppRoutes() {
    return (
    <Routes>
        <Route path="/personal-page" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
        </Route>

    </Routes>
    );
}
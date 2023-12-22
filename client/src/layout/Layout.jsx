import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Layout = () => {
    return (
        <>
        <div className="text-primary font-mono flex flex-col min-h-screen">
            <Navbar />
                <Outlet />
            <Footer />
        </div>
        </>
    );
};
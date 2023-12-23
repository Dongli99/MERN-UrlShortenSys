import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
        <>
        <div className="text-primary font-mono flex flex-col min-h-screen">
            <Navbar />
            <div className="flex items-center grow justify-around py-12 px-4 sm:px-6 lg:px-8">
                <Outlet />
            </div>
            <Footer />
        </div>
        </>
    );
};
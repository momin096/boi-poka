import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="container mx-auto">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
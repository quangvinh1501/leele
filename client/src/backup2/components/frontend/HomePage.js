import React from "react";
import NavBar from "./NavBar";
import "./css/style.css";
import "./css/animated-headlines.css";
import "./css/default.css";
import "./css/meanmenu.min.css";
import "./css/responsive.css";
import PackagePage from "./PackagePage";
import Slider from "./Slider";
import WelcomePage from "./WelcomePage";
import FooterPage from "./FooterPage";
const HomePage = () => {
    return (
        <div className="wrapper white-bg">
            <NavBar />
            <Slider/>
            <PackagePage/>
            <WelcomePage/>
            <FooterPage/>
        </div>
    )
}
export default HomePage;
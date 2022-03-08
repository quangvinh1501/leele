import React from "react";
import Slider from "./Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServiceSection from "./ServiceSection";
import ContactSection from "./ContactSection";
import ProductSection from "./ProductSection";
const MainPage = () => {
    return (
        <>
            <Slider />
            <ServiceSection/>
            <ProductSection/>
            <ContactSection/>
        </>
    )
}
export default MainPage;
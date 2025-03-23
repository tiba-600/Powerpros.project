import React, { useState } from "react";
import Offertebtn from "@design/Offertebtn/Offertebtn";
import "./Header.css";
import Nav from "@design/Nav/Nav";
import Header_logo from "@design/Header_logo/Header_logo";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <Header_logo />
                </div>
                <Nav isNavOpen={isNavOpen} toggleNav={toggleNav} />
                <div className="offertebtn-container">
                    <Offertebtn />
                </div>
                <div className={`hamburger ${isNavOpen ? "close" : ""}`} onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Header;
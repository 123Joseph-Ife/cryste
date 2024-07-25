import React, { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState("close");
    return (
        <header className="header sb-flex pad">
            <a href="/" className="name">
                Cryste Emmanuel
            </a>
            <div
                className={open === "open" ? "hamburger" : "hamburger active"}
                onClick={() =>
                    open === "open" ? setOpen("close") : setOpen("open")
                }
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={open === "open" ? "all-flex gp-30" : "ul-active"}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About me</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
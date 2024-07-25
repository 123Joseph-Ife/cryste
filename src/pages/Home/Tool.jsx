import React from "react";

const Tool = () => {
    const languages = [
        {
            id: 1,
            img: "./icons/c.svg",
            alt: "C Programming Language",
            name: "C Programming.",
        },
        {
            id: 2,
            img: "./icons/cpp.svg",
            alt: "C++ Programming Language",
            name: "C++ Programming.",
        },
        {
            id: 3,
            img: "./icons/python.svg",
            alt: "Python Programming Language",
            name: "Python Programming.",
        },
    ];

    const tools = [
        {
            id: 1,
            img: "./icons/mplab.png",
            alt: "Mplab",
            name: "MpLabX IDE.",
        },
        {
            id: 2,
            img: "./icons/ccs.png",
            alt: "CCS",
            name: "CCS Compiler.",
        },
        {
            id: 3,
            img: "./icons/proteus.png",
            alt: "Proteus",
            name: "Proteus 8 professional.",
        },
        {
            id: 3,
            img: "./icons/pickit.png",
            alt: "Pickit",
            name: "Pickit 2.",
        },
    ];
    return (
        <div className="tool-container">
            <div className="tools">
                <h2 className="fade-in">Languages: </h2>
                <div className="tool-holder">
                    {languages.map((tool) => (
                        <div className="tool fade-in" key={tool.id}>
                            <img src={tool.img} alt={tool.alt} />
                            <h3>{tool.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tools">
                <h2>Tools: </h2>
                <div className="tool-holder">
                    {tools.map((tool) => (
                        <div className="tool fade-in" key={tool.id}>
                            <img src={tool.img} alt={tool.alt} width="100px" />
                            <h3>{tool.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tool;

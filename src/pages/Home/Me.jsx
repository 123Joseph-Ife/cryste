import React from "react";

const Me = () => {
    return (
        <section className="info pad sb-flex gp-50">
            <img
                src="background.jpg"
                alt="Embedded systems"
                className="img-part"
                width="600px"
            />
            <div className="txt wrap-flex gp-30">
                <h2 className="txt-lft">Embedded systems engineering</h2>
                <div className="wrap-flex gp-20">
                    <p>
                        I am a fully experienced Embedded Systems engineer, And
                        I have 3 years experience in programming and designing
                        hardware components.
                    </p>
                    <p>
                        I use professional tools for building, compiling and
                        designing hardware components such as MplabX, CCS
                        compiler and languages like c, python and c++.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Me;

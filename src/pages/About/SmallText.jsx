import React from "react";

const SmallText = () => {
    return (
        <section className="about pad wrap-flex gp-50">
            <h1 className="txt-ct">ABOUT</h1>
            <div className="topic wrap-flex gp-30">
                <h1 className="txt-lft">Experience</h1>
                <p>
                    I am a very well experienced embedded systems engineer with
                    over three years of experience. I can build structures and
                    components, create boards, write code for boards e.t.c.
                </p>
            </div>
            <div className="topic wrap-flex gp-30">
                <h1 className="txt-lft">Coding</h1>
                <p>
                    I use python, c and c++ when developing i mainly use c for
                    development, and tools like mplab, cccs proteus 8 e.t.c for
                    professional development. I hve knowledge in both theory and
                    practical aspects of embedded systems engineering which
                    means i can write down structures, code them and apply them
                    practically to motherboards.
                </p>
            </div>
        </section>
    );
};

export default SmallText;

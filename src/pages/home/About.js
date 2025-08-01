import React from "react";

const About = () => {
    return (
        <section className="about" style={{ paddingBottom: "70px" }}>
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-6 mb-4 animate-box"
                        data-animate-effect="fadeInUp"
                    >
                        <div
                            className="skydecor-section-title"
                            style={{ marginBottom: 24 }}
                        >
                            The TOTAL LIVING CONCEPT
                        </div>
                        <p className="about-skydecor-p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                            <br />
                            <br />
                            It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>

                    <div
                        className="col-md-5 offset-md-1 animate-box"
                        data-animate-effect="fadeInUp"
                    >
                        <img
                            src="https://res.cloudinary.com/dtlazsqas/image/upload/v1748340272/Logo-01_vvzhdt.png"
                            alt="Skydecor Logo"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default About;

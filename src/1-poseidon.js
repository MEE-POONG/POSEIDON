import React from 'react';
import { BackgroundImage } from 'react-image-and-background-image-fade'
import { Col } from 'react-bootstrap';


function HeaderPage() {
    return (
        <>
            <BackgroundImage
                src={`${process.env.PUBLIC_URL}/received_340228624415134.webp`}
                height="900px"
            >
                {/* <col> */}
                <Col>
                    <center>
                        <img
                            style={{ paddingTop: "145px" }}
                            src={`${process.env.PUBLIC_URL}/received_6169362686407949.webp`}
                            width="700px"
                        />
                    </center>
                </Col>
                <Col style={{ marginTop: "-550px" }}>
                    <center>
                        <img
                            src={`${process.env.PUBLIC_URL}/received_1134637683713370.webp`}
                            width="550px"
                            height="450px"
                        />
                    </center>
                </Col >
                <Col style={{ marginTop: "-640px" }}>
                    <center>
                        <img
                            src={`${process.env.PUBLIC_URL}/received_215674923827755.webp`}
                            width="650px"
                        />
                    </center>
                </Col>
            </BackgroundImage >
        </>
    );
}

export default HeaderPage;

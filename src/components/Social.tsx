import React from "react";
import Container from "react-bootstrap/Container";
import {Nav} from "react-bootstrap";
import Image from "react-bootstrap/Image"

function Social() {
    return (
        <Container>
            <h3>Follow me on LinkedIn:</h3>
            <Nav className="justify-content-center">
                <Nav.Item style={{width: "100px", transformOrigin: "top"}}>
                    <Nav.Link href="https://www.linkedin.com/in/vgpontes" target="_blank">
                        <Image src={require("../images/linkedin.png")} fluid/>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <p>
                Made with love in Tempe, AZ
            </p>
        </Container>
    );
}

export default Social;
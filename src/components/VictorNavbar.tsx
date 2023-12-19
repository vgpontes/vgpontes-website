import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function VictorNavbar() {
    // style={{position: "relative", fontFamily: "Times New Roman", backgroundColor: "#FAF9F6"}}
    // data-bs-theme="dark" for dark mode
    return (
        <Navbar sticky="top" expand="lg" style={{fontFamily: "Inconsolata", backgroundColor: "#FAF9F6"}}>
            <Container fluid>
                <Navbar.Brand href="#">Victor Pontes</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#social">Social</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default VictorNavbar;
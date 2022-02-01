import {Navbar,Container,Nav } from "react-bootstrap"

const Navbarrea = () => {
    return (
        <div>
    <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">AlphaSecurity</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">About us</Nav.Link>
                <Nav.Link href="#features">Our products</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
)
}

export default Navbarrea;
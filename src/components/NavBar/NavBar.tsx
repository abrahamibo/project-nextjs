import React, { useState } from "react";
import { Col, Nav, Navbar, Image, Container } from "react-bootstrap";
import Link from "next/link";
import ModalSignIn from "../Modal/ModalSignIn/ModalSignIn";

export default function NavBar() {
  const [user, setUser] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [isLogged, setIsLogged] = useState(false);


  return (
    <>
      {/* Modal used to logged*/}
      <ModalSignIn show={modalShow} onHide={() => setModalShow(false)} />

      <Container fluid className="p-0">
    <Navbar className={"styles.navHome"} bg={"white"}>
      <Navbar.Brand>
        <Col xs={6} md={4}>
          <Link href="/">
            <Image src="vercel.svg" height="28" />
          </Link>
        </Col>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse>
        <Nav className="m-auto justify-content-center ">
          {/*{navButtons.map((btn, key) => (
            <NavButton path={btn.path} label={btn.label} key={key} />
          ))}*/}
        </Nav>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <a onClick={() => setModalShow(true)}>Connecion</a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </Container>
      </>
  )
}
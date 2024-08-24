import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container className='p-2 border bg-secondary'>
      <Nav className="me-auto">
        <Link className='mx-2 text-decoration-none link-warning' to={"/"}>Home</Link>
        <Link className='mx-2 text-decoration-none link-warning' to={"/functions"}>Functions</Link>
        <Link className='mx-2 text-decoration-none link-warning' to={"/arrays"}>Arrays</Link>
        <Link className='mx-2 text-decoration-none link-warning' to={"/dsa"}>DSA</Link>
      </Nav>
    </Container>
  </Navbar>  );
}

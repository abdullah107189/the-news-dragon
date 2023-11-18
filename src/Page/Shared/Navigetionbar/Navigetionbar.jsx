import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProviders';

const Navigetionbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log(error.massage)
            });
    }
    return (
        <div>
            <Container>
                <Navbar collapseOnSelect expand="lg" className="">
                    <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-center align-item-center">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none mx-2' to="/">Home</Link>
                            <Link className='text-decoration-none mx-2' to="/about">About</Link>
                            <Link className='text-decoration-none mx-2' to="/career">Career</Link>
                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center'>
                            {
                                user &&
                                <Nav.Link href="#deets">
                                    <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
                                </Nav.Link>
                            }


                            {
                                user ?
                                    <button onClick={handleLogOut} className='text-decoration-none bg-black opacity-75 text-white fw-semibold px-4 py-1 border-0'>Logout</button>
                                    :
                                    <Link to='/login' className='text-decoration-none bg-black opacity-75 text-white fw-semibold px-4 py-1 border-0'>Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </Container>
        </div>
    );
};

export default Navigetionbar;
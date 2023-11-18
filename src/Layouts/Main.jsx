import React from 'react';
import Header from '../Page/Shared/Header/Header';
import Footer from '../Page/Shared/Footer/Footer';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import RightNav from '../Page/Shared/RightNav/RightNav';
import LeftNav from '../Page/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import Navigetionbar from '../Page/Shared/Navigetionbar/Navigetionbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navigetionbar></Navigetionbar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>

                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
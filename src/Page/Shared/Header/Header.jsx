import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import user from '../../../assets/user.png'
import moment from 'moment';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Providers/AuthProviders';


const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <div>
                    {
                        user && <img src={logo} alt="" />
                    }
                    <p className='text-secondary'>Journalism Without Fear or Favour</p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
            </div >
            <div className='border p-2 bg-secondary bg-opacity-25 d-flex'>
                <button className='btn bg-danger text-white rounded-0 fw-semibold'>Latest</button>
                <Marquee className='mx-2 fw-semibold'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>


        </Container>
    );
};

export default Header;
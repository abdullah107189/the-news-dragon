import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4 >Login with</h4>
            <Button variant="outline-primary w-100 mt-2" ><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary w-100 mt-2"><FaGithub /> Login with Github</Button>
            <h4 className='my-3'>find us on</h4>
            <div>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <QZone></QZone>
            </div>
        </div>
    );
};

export default RightNav;
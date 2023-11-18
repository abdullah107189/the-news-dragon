import React from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <h1>Dragon News</h1>
            <Card>
                <Card.Img className='p-3' variant="top" src={image_url} />
                <Card.Body className='p-3'>
                    <Card.Title className='fs-3'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`} className='bg-danger text-decoration-none text-white px-4 py-2 border-0'><FaArrowLeft></FaArrowLeft> All news in this category</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;
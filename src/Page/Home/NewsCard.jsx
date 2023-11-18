import moment from 'moment';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, category_id, rating, total_view, title, author, thumbnail_url, image_url, details, } = news;
    const [isOpen, setIsOpne] = useState(false)
    return (
        <Card className="mb-4">
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-2'>
                        <img style={{ height: '40px', borderRadius: '50%' }} src={author.img} alt="" />
                        <div className='d-flex flex-column'>
                            <p className='mb-0'>{author.name ? author.name : 'no name'}</p>
                            <p>{moment(author?.published_date).format('YYYY-MM-D')}</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <div>
                    {
                        details.length < 200 ?
                            <p>{details}</p> :
                            <div>
                                {/* {isOpen ? details : <>{details.slice(0, 200)}...</>}
                                <span className='fw-semibold text-danger btn' onClick={() => setIsOpne(!isOpen)}>{isOpen ? "Read less" : "Read more"}</span> */}
                                {<>{details.slice(0, 200)}... <Link className='fw-semibold text-danger btn' to={`/news/${_id}`}>Read More</Link></>}
                            </div>
                    }
                </div>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <Rating
                    placeholderRating={rating.number}
                    emptySymbol={<FaRegStar />}
                    readonly
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar className='text-warning'></FaStar>}
                />

                <div className='gap-2 d-flex align-items-center'><FaEye></FaEye> {total_view}</div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
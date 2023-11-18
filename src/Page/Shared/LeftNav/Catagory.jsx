import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../Home/NewsCard';

const Catagory = () => {
    const { id } = useParams()
    const catagoryNews = useLoaderData();
    return (
        <div>
            <h1>Dragon news here</h1>
            <div className=''>
                {
                    catagoryNews.map(news =>
                        <NewsCard
                            key={news._id}
                            news={news}
                        >
                        </NewsCard>)
                }
            </div>
        </div>
    );
};

export default Catagory;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h1>All Categories</h1>
            <div className='ps-4'>
                {
                    categories.map(category =>
                        <button key={category.id} className='border-0 w-100 text-start py-2'>
                            <Link className='px-2 text-decoration-none ' to={`/catagory/${category.id}`}>{category.name}</Link>
                        </button>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
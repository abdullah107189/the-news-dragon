import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <p>This is terms</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam sapiente labore cumque, laudantium facere alias inventore distinctio non officia. Rerum cupiditate omnis et ea in reiciendis tempore ex, eaque a placeat, quas odio facilis dignissimos dolorem, laboriosam alias possimus accusantium! Quidem voluptas maiores cumque perspiciatis! Blanditiis quo, saepe repudiandae aut asperiores sit pariatur sint adipisci totam eum. Voluptatibus ducimus laboriosam adipisci, quasi consectetur labore beatae dolore ea illum. Eaque mollitia dicta tempore ipsum adipisci! Quos, ipsam! Numquam possimus optio obcaecati quos dignissimos animi rem reiciendis est expedita ipsa magni rerum labore doloribus sequi et laudantium in, amet enim quod ex.</p>
            <Link to={`/reg`}>Back to Register</Link>
        </div>
    );
};

export default Terms;
import React from 'react';

const PrimaryBlog = ({ params }) => {
    const [year, id] = params.segments || [];
    console.log(params.segments);
    return (
        <div className='p-6'>
            <h2 className='text-center text-xl font-extrabold'>
                This Primary Blog page is for the testing purpose of Dynamig route. {year}.
            </h2>
            <h4 className='text-center text-2xl'>Route number{id} from year: {year}</h4>
        </div>
    );
};

export default PrimaryBlog; 
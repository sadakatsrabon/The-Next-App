import React from 'react';

const PrimaryBlog = ({ params }) => {
    console.log(params.id);
    return (
        <div>
            This Primary Blog page is for the testing purpose of Dynamig route {params.id}.
        </div>
    );
};

export default PrimaryBlog; 
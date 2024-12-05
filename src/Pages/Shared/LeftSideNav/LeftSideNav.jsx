// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="md:mt-10">
            <h1 className='text-2xl font-bold'>All Caterogy</h1>
            <div className="mt-4 text-xl font-semibold bg-gray-200 p-4 rounded-lg">National News</div>
            {
                categories.map(category => <Link className="block ml-4 mt-4 text-lg font-semibold text-gray-900 dark:text-white" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;     
// import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" text-center mt-10">
            <h1 className="text-4xl font-bold text-red-500">404</h1>
            <p className="text-2xl my-5">Page not found</p>
            <Link to='/' className="btn btn-outline font-semibold border-1 border-b-4 px-5">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;   

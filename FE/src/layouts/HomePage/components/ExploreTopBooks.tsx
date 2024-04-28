import React from 'react';
import {Link} from "react-router-dom";

const ExploreTopBooks = () => {
    return (
        <div>
            <div className="p-5 mb-4 bg-dark header">
                <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="display-5 fw-bold">Find your next adventure</h1>
                        <p className="col-md-8 fs-4"> Where would you like to go next?</p>
                        <Link to='/search'
                              className="btn btn-primary text-white">
                            Explore Top Books
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreTopBooks;
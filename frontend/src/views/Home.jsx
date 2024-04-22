// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../views/Carousel";
import Cards from "../views/Cards";
import AllBooks from '../views/all_books';

export default function Home() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Amader Liberay</a>
                <Link to="/login" className="btn btn-success">
                    Login Librarian
                </Link>
            </nav>

            <Carousel />
            <Cards />
            <AllBooks />
        </div>
    );
}

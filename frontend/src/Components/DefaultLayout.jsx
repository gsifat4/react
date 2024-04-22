// DefaultLayout.js
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import Navbar from '../views/Navbar';
import Carousel from '../views/Carousel';
import Cards from '../views/Cards';
import { Link } from "react-router-dom";

const DefaultLayout = () => {
    const { user, token, setUser, setToken } = useStateContext();

    // Redirect to login page if token is not available
    if (!token) {
        return <Navigate to='/Home' />;
    }

   const onLogout = (ev) =>{
        ev.preventDefault();
        axiosClient.get('/logout')
        .then(() => {
            setUser(null);
            setToken(null);
        })
        .catch(error => {
            console.error("Logout error:", error);
        });
    }

    // Fetch user data on component mount
    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data);
            })
            .catch(error => {
                console.error("Fetch user error:", error);
            });
    }, []);

    return (
        <div id="defaultLayout" className="container-fluid">
            <Navbar user={user} onLogout={onLogout} />

            <main className="mt-4">
                <Outlet />
            </main>
        </div>
    );
}

export default DefaultLayout;

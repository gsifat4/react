// Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    return (
        <header className="navbar navbar-dark bg-dark">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <Link to={"/"} className="navbar-brand me-4">Home</Link>
                    {/* <Link to={"/users"} className="navbar-brand">Users List</Link> */}
                    <Link to={"/add_books"} className="navbar-brand">Add Books</Link>
                    <Link to={"/all_books"} className="navbar-brand">Available Books</Link>

                </div>
                {user && (
                    <div className="d-flex justify-content-between align-items-center">
                         <span style={{ flex: "1", textAlign: "right", color: "white" }}>{user.name}</span>
                        <span className="me-1">🚹</span>
                        <button onClick={onLogout} className="btn btn-danger">Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;

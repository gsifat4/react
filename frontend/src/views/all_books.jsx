import React, { useState, useEffect } from "react";
import axiosClient from "../axiosClient";

export default function AllBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllBooks();
    }, []);

    const fetchAllBooks = () => {
        axiosClient.get('/allbooks')
            .then(res => {
                if (Array.isArray(res.data)) {
                    setBooks(res.data);
                    setLoading(false);
                } else {
                    console.error('Invalid data format - expected an array:', res.data);
                    setLoading(false);
                }
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                setLoading(false);
            });
    }

    return (
        <div className="container text-center"> {/* Added text-center class here */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
<h1 className="mb-4" style={{backgroundColor: '#4f92ff', color:'#ffff'}}>AVAILABLE BOOKS</h1>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Sno.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Writer</th>
                                <th scope="col">Shelf</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, index) => (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.name}</td>
                                    <td>{book.writer}</td>
                                    <td>{book.shelf}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

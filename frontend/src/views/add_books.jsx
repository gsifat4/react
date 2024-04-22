import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";

export default function Create() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        writer: '',
        shelf: ''
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    }

    const submitForm = () => {
        console.log("Data being sent:", inputs); // Log data before making the POST request
        axiosClient.post('/addbooks', inputs)
            .then((res) => {
                console.log("Book created successfully");
                setShowModal(true);
                navigate('/all_books');
            })
            .catch((error) => {
                // Handle error if needed
                console.error("Error creating book:", error);
            });
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h2 className="mb-4">Add New Book</h2>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control mb-2"
                        value={inputs.name}
                        onChange={handleChange}
                    />

                    <label>Writer Name</label>
                    <input
                        type="text"
                        name="writer"
                        className="form-control mb-2"
                        value={inputs.writer}
                        onChange={handleChange}
                    />

                    <label>Shelf No:</label>
                    <input
                        type="text"
                        name="shelf"
                        className="form-control mb-2"
                        value={inputs.shelf}
                        onChange={handleChange}
                    />

                    <button
                        type="button"
                        className="btn btn-info mt-2"
                        onClick={submitForm}
                    >
                        Create
                    </button>
                </div>
            </div>

            {/* Bootstrap modal */}
            {showModal && (
                <div className="modal fade show" id="successModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Book created successfully!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* End Bootstrap modal */}
        </div>
    )
}

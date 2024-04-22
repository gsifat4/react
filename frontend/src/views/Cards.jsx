import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className="card-container" style={{ display: 'flex', gap: '20px', padding: '20px 0', marginTop: '30px' , marginLeft: '200px' }}>
            <div className="card" style={{ width: '18rem', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpF1ocgpad7BrZAzJwrluua8fVdgH9ejtjtcgxfO1jfFJQtF0bvsSZ9k8NLSw8kbBI7Y&usqp=CAU" alt="Card image cap" style={{ width: '100%', height: 'auto' }} />
                <div className="card-body">
                    <h5 className="card-title">Importance Of Reading Books</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>

            <div className="card" style={{ width: '18rem', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                <img className="card-img-top" src="https://www.glassdoor.com/employers/app/uploads/sites/2/2018/08/rsz_469134867-3.jpg" alt="Card image cap" style={{ width: '100%', height: '180px' }} />
                <div className="card-body">
                    <h5 className="card-title">Benefis Of Reading Books</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/add_books" className="btn btn-primary">Details</a>
                </div>
            </div>

            <div className="card" style={{ width: '18rem', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_01KZ4ylr8Mh8esiB6_uWerG8wBnMujtkjbr-52mjg&s" alt="Card image cap" style={{ width: '100%', height: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">Knowledge</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={"/add_books"} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
}

export default Cards;

import React from 'react';

const Carousel = () => {

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2000"> {/* Setting interval to 2 seconds */}
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Urval_av_de_bocker_som_har_vunnit_Nordiska_radets_litteraturpris_under_de_50_ar_som_priset_funnits_%282%29.jpg/260px-Urval_av_de_bocker_som_har_vunnit_Nordiska_radets_litteraturpris_under_de_50_ar_som_priset_funnits_%282%29.jpg" style={{ width: '500px', height: '500px' }} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://i.guim.co.uk/img/media/77e3e93d6571da3a5d77f74be57e618d5d930430/0_0_2560_1536/master/2560.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctYWdlLTIwMTkucG5n&s=6c510e4d48955c1f03d1ae1a91a7e32e" style={{ width: '500px', height: '500px' }} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMzAOSkN297QO6ee_UUZN6TOan7hAsk1tPXux73L2lg&s" style={{ width: '500px', height: '500px' }} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;

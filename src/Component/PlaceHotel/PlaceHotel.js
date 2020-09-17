import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './PlaceHotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import hotel1 from '../../Image/travel/Rectangle 26.png';
import hotel2 from '../../Image/travel/Rectangle 27.png';
import hotel3 from '../../Image/travel/Rectangle 28.png';
const PlaceHotel = () => {
    const starIcon = <FontAwesomeIcon icon={faStar} />
    const history = useHistory();
    const pathName = history.location.pathname;
    console.log(pathName);
    const getDynamicValue = (e) => {
        if (e === "/place-hotel/Cox's Bazar") {
            const title = "Cox's Bazar";
            return title;
        } else if (e === '/place-hotel/Sundorbon') {
            const title = "Sundorbon";
            return title;
        } else if (e === '/place-hotel/Sreemongol') {
            const title = "Sreemongol";
            return title;
        }
    }
    return (
        <Container id="place-hotel">
            <Row>
                <Col md={6}>
                    <section className="place-information">
                        <div className="place-title pb-3">
                            <span className="text-muted">252 stays Apr 13-17 3 guest</span>
                            <h3>Stay In {getDynamicValue(pathName)}</h3>
                        </div>
                        <Row>
                            <Col md={6}>
                                <div className="hotel-images">
                                    <img src={hotel1} alt="" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="hotel-info">
                                    <h3>Light bright airy stylish apt & safe peaceful stay</h3>
                                    <span className=" d-block py-2 text-muted">4 guests 2 bedrooms2 beds 2 bath Wif Air condition Kitchen Cancellation fexibility availiable</span>
                                    <span className="d-block small text-warning">{starIcon}
                                        <span className="d-inline-block text-dark">4.9(20)</span>
                                        <span className="text-muted d-inline-block ml-4">$34/night <sup>$167 total</sup></span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <br/> <br/>
                        <Row>
                            <Col md={6}>
                                <div className="hotel-images">
                                    <img src={hotel2} alt="" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="hotel-info">
                                    <h3>Apartment in Lost Panorama</h3>
                                    <span className=" d-block py-2 text-muted">4 guests 2 bedrooms2 beds 2 bath Wif Air condition Kitchen Cancellation fexibility availiable</span>
                                    <span className="d-block small text-warning">{starIcon}
                                        <span className="d-inline-block text-dark">4.8(10)</span>
                                        <span className="text-muted d-inline-block ml-4">$52/night <sup>$167 total</sup></span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                        <br/> <br/>
                        <Row>
                            <Col md={6}>
                                <div className="hotel-images">
                                    <img src={hotel3} alt="" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="hotel-info">
                                    <h3>AR Lounge & Pool (r&r + b&b)</h3>
                                    <span className=" d-block py-2 text-muted">4 guests 2 bedrooms2 beds 2 bath Wif Air condition Kitchen Cancellation fexibility availiable</span>
                                    <span className="d-block small text-warning">{starIcon}
                                        <span className="d-inline-block text-dark">4.9(25)</span>
                                        <span className="text-muted d-inline-block ml-4">$44/night <sup>$167 total</sup></span>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Col>
                <Col md={6}>
                    <h3>Google Map Section</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceHotel;
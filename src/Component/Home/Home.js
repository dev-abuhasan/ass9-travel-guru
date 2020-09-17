import React, {  } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Home.css"
import coxBazarImg from "../../Image/travel/Sajek.png";
import sundorbonImg from "../../Image/travel/sundorbon.png";
import sreemongolImg from "../../Image/travel/Sreemongol.png";
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const rightArrowIcon = <FontAwesomeIcon icon={faLongArrowAltRight} />
    const history = useHistory();
    const travelFun = e => {
        if (e === "cox-bazar") {
            const url = `/travel/${e}`;
            history.push(url);
        } else if (e === 'sundorbon') {
            const url = `/travel/${e}`;
            history.push(url);
        } else if (e === 'sreemongol') {
            const url = `/travel/${e}`;
            history.push(url);
        }
    }
    return (
        <Container id="home" className="row m-auto">
            <section id="travel-details-area" className="col-md-4">
                <div className="cox-bazar">
                    <h3>COX'S BAZAR</h3>
                    <p>Cox's Bazar is a city, finish port, tourism center and district headquarter in southeastern Bangladesh. It is famous mostly for it's long natural sandy beach and it....</p>
                    <Link to="/login" className="booking-btn">Booking {rightArrowIcon}</Link>
                </div>
            </section>
            <section id="travel-slider-area" className="col-md-8">
                <Row className="slider-sec w-100">
                    <Col md={4} className="slider-item slider-item1">
                        <div onClick={() => travelFun('cox-bazar')} className="slider-info">
                            <img src={coxBazarImg} alt="" />
                            <h3>COX'S BAZAR</h3>
                        </div>
                    </Col>
                    <Col md={4} className="slider-item slider-item2">
                        <div onClick={() => travelFun('sundorbon')} className="slider-info">
                            <img src={sundorbonImg} alt="" />
                            <h3>Sundarbon</h3>
                        </div>
                    </Col>
                    <Col md={4} className="slider-item slider-item3">
                        <div className="slider-info">
                            <img onClick={() => travelFun('sreemongol')} src={sreemongolImg} alt=""/>
                            <h3>Sreemongol</h3>
                        </div>
                    </Col>
                    <section className="w-75 mx-auto p-3">
                        <button className="btn btn-light m-2 py-2 px-3"><i className="fa fa-chevron-left" aria-hidden="true"></i></button>

                        <button className="btn btn-light m-2 py-2 px-3"><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
                    </section>
                </Row>
            </section>
        </Container>
    );
};

export default Home;
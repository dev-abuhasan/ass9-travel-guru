import React, { useContext } from 'react';
import './PlaceHotel.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import hotel1 from '../../Image/travel/Rectangle 26.png';
import hotel2 from '../../Image/travel/Rectangle 27.png';
import hotel3 from '../../Image/travel/Rectangle 28.png';
//leaflet
import { Map, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { UserContext } from '../FireBaseAuth/auth';


const PlaceHotel = () => {
    const auth = useContext(UserContext);
    const {user} = auth;
    const popupSignUser = user.name;
    //google map api key : AIzaSyDvl8gM7LAqD5_UpTKOlX89d4jmg5IudCE
    // url="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    // const APP_KEY = "AIzaSyDvl8gM7LAqD5_UpTKOlX89d4jmg5IudCE";
    // const url = `https://maps.googleapis.com/maps/api/js?key=${APP_KEY}&callback=initMap`

    const starIcon = <FontAwesomeIcon icon={faStar} />
    const history = useHistory();
    const pathName = history.location.pathname;
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

    //position get by (https://www.latlong.net/) this web site 
    const setPositionOfMap = (e) => {
        if (e === "/place-hotel/Cox's Bazar") {
            const title = [21.4272, 92.058];
            return title;
        } else if (e === '/place-hotel/Sundorbon') {
            const title = [21.9900, 89.480];
            return title;
        } else if (e === '/place-hotel/Sreemongol') {
            const title = [24.310577, 91.725136];
            return title;
        }
    }
    return (
        <Container id="place-hotel" className="mb-5">
            <div className="userInfo d-flex flex-column align-items-center my-3">
                <div className="user-information pt-5">
                    <h4 className="">Hello, Mr.</h4>
                   {
                    popupSignUser === undefined 
                   ? <h5>{user}</h5> : <h5>{popupSignUser}</h5>
                    
                    }
                </div>
            </div>
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
                        <br /> <br />
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
                        <br /> <br />
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
                    <div className="map">
                        <Map center={setPositionOfMap(pathName)} zoom={10} className="main-map">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                        </Map>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceHotel;
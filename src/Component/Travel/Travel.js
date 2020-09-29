import React from 'react';
import './Travel.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const Travel = () => {
    const history = useHistory();
    const pathName = history.location.pathname;
    //submit btn handle
    const handChangePath = () => {
        const url = `/place-hotel/${getDynamicValue(pathName)}`
        history.push(url)
    }
    const getDynamicValue = (e) => {
        if (e === '/travel/cox-bazar') {
            const title = "Cox's Bazar";
            return title;
        } else if (e === '/travel/sundorbon') {
            const title = "Sundorbon";
            return title;
        } else if (e === '/travel/sreemongol') {
            const title = "Sreemongol";
            return title;
        }
    }
    return (
        <Container id="travel">
            <Row>
                <Col md={6}>
                    <div id="travel-info-sec">
                        <h3>{getDynamicValue(pathName)}</h3>
                        <p>{getDynamicValue(pathName)}. Is a town on the southeast coast of Bangladesh. it's Known for its very long, sandy beachfront, stretchingLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div id="travel-form-sec">
                        <Form onSubmit={() => handChangePath()}> 
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control className="tavel-input" type="text" placeholder="Enter your District" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control as="select" required>
                                    <option>selecet</option>
                                    <option>Cox's Bazar</option>
                                    <option>Sreemongol</option>
                                    <option>Sundorbon</option>
                                </Form.Control>
                            </Form.Group>
                            <div className="row justify-content-between px-3">
                                <Form.Group controlId="formBasicDate1">
                                    <Form.Label>Form</Form.Label>
                                    <Form.Control className="tavel-input" type="date" required />
                                </Form.Group>
                                <Form.Group controlId="formBasicDate2">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control className="tavel-input" type="date" required />
                                </Form.Group>
                            </div>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="i agree all condition" className="" required />
                            </Form.Group>
                            <Button variant="" className="login-btn d-block w-100" type="submit">
                                Start Booking
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Travel;
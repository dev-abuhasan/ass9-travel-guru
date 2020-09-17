import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../FireBaseAuth/auth';
import './Style.css';
const RestPassword = () => {
    const auth = useContext(UserContext);
    const { resetPassword } = auth;
    const [email, setEmail] = useState();
    console.log(email);

    const handleEmail = (e) => {
        const getEmail = e.target.value;
        setEmail(getEmail)
    }
    const handResetPassword = () => {
        console.log(email);
        resetPassword(email);

    }
    return (
        <Container id="reset-password">
            <h4>Type Your Password For Reset.</h4>
            <input type="text" name="email" placeholder="Your Email...." onBlur={handleEmail} required/>
            <br />
            <button type="submit" className="btn btn-danger" onClick={() => handResetPassword()}>Reset Password</button>
        </Container>
    );
};

export default RestPassword;
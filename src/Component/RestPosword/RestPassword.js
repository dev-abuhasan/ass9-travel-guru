import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../FireBaseAuth/auth';
import './Style.css';
const RestPassword = () => {
    const auth = useContext(UserContext);
    const { resetPassword } = auth;
    const [email, setEmail] = useState();
    const [error, setError] = useState('');
    console.log(email);

    const handleEmail = (e) => {
        const getEmail = e.target.value;
        setEmail(getEmail)
    }
    const handResetPassword = () => {
        resetPassword(email);
        setError('Please Check Your Email Address');
    }
    return (
        <Container id="reset-password">
            <h4>Type Your Email For Reset Your Password.</h4>
            <input type="text" name="email" placeholder="Your Email...." onBlur={handleEmail} required />
            <br />
            <button type="submit" className="btn btn-danger" onClick={() => handResetPassword()}>Reset Password</button>
            <br/><br/>
            {error
                ? <h5 className="text-success bg-light w-50 float-left p-4">{error}</h5>
                : <h5>.....</h5>
            }
        </Container>
    );
};

export default RestPassword;
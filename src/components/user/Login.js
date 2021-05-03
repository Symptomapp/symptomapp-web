import React, { useState } from 'react'
import { Form, Button, Col, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { setAccessToken } from '../../store/AccessTokenStore';
import API_URL from '../../constants/constants'

const axios = require('axios').default;

const Login = ({ doLogin }) => {

    const [state, setState] = useState({
        data: {
        email: "",
        password: "",
        },
        error: "",
        token: ""
    })

    const { data, error, token } = state

    const setToken = (response) => {
        setState(prev => {
                return {
                    ...prev,
                    data: {
                    ...prev.data
                    },
                    error: "",
                    token: response.data.access_token
                }
                });
        setAccessToken(response.data.access_token, response.data.userId);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(`${API_URL}/auth/login`, data )
        .then(function (response) {
            response.data.errors
            ? setState(prev => {
                return {
                    ...prev,
                    data: {
                    ...prev.data,
                    },
                    error: response.data.errors.message,
                    token: ""
                }
                })
            : setToken(response)
            
        })
        .catch(function (error) {
            console.log(error);
        });

    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setState(prev => {
        return {
            ...prev,
            data: {
            ...prev.data,
            [name]: value,
            }
        }
        });

    };

    return (
        <div className="container mt-5">
            { error.length > 0 ? <Alert variant="danger" className="mb-5">{error}, check again. If you don't have an account yet you can sign up <Link to="/sign-up" className="mt-3">here</Link>.</Alert> : "" }
            { token.length > 0 ? <Alert variant="success" className="mb-5">Login successful!</Alert> : "" }
            <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleChange} autoComplete="email" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={handleChange} autoComplete="current-password" required/>
                        </Form.Group>
                    </Form.Row>

                    <Button className="button--primary" type="submit">
                        Submit
                    </Button>
            </Form>

        </div>
    );
}

export default Login
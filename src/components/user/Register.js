import React, { useState } from 'react'
import { Form, Button, Col, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom";
import API_URL from '../../constants/constants'

const axios = require('axios').default;

const Register = () => {

  const [state, setState] = useState({
    data: {
      email: "",
      password: "",
      name: "",
      surname: "",
      age: "",
      sex: "",
      city: "",
      picture: "https://miro.medium.com/max/3150/1*NFwzjjur2atssvIlGia0AQ.jpeg",
    },
    message: "",
  })

  const { data, message } = state

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios.post(`${API_URL}/auth/singup`, data )
    .then(function (response) {
        setState(prev => {
            return {
                ...prev,
                data: {
                ...prev.data,
                },
                message: response.data
            }
            });
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
    <div className="container mt-5 mb-5">
        { message._id ? <><Alert variant="success" className="mb-5">Thank you, { message.name }. You have successfully registered your account. Welcome!</Alert><div className="text-center"><Link to="/log-in" className="mt-3"><Button variant="primary" className="text-center">Login</Button></Link></div></> : "" }
        { message.code ? <Alert variant="danger" className="mb-5">Ups, there's something wrong with data provided. It's seems you are already registed. Check it and try again.</Alert> : "" }
        { message.message ? <Alert variant="danger" className="mb-5">Ups, there's something wrong with data provided: { message.message }</Alert> : "" }
        { message._id 
            ? "" 
            :  <Form onSubmit={handleSubmit}>
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

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={data.name} onChange={handleChange} autoComplete="given-name" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurname">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type="text" placeholder="Enter surname" name="surname" value={data.surname} onChange={handleChange} autoComplete="family-name" required/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridPicture">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="url" placeholder="http://www..." name="picture" value={data.picture} onChange={handleChange} autoComplete="photo"/>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" min="18" max="99" placeholder="Age" name="age" value={data.age} onChange={handleChange} autoComplete="bday-year" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control as="select" name="sex" onChange={handleChange} autoComplete="sex" required>
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Your city" name="city" value={data.city} onChange={handleChange} autoComplete="address-level2" required/>
                    </Form.Group>
                </Form.Row>

                <Button className="button--primary" type="submit">
                    Submit
                </Button>
                </Form>
        }

    </div>
  );
}

export default Register
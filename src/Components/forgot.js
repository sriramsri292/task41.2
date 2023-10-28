import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export default function Forgot() {

  const [data, setdata] = useState({
    email: '',
    password: '',
  });
  const [message,setmessage]=useState({
    message:' ',
   success:' '
  });

  function handleChange(e) {
    setdata({
      ...data,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      email: data.email, 
      password: data.password
    }
  
    fetch('https://task41-3m8l.onrender.com/auth/forgotpassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((response) => {
      
        setmessage({
          message: response.message,
          success:response.success
          
        });
       
       
       
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error(error);
      });
  }
  
  return (
    <div className="fa">
      <div className="fb">
      <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={data.email}
                />
                <Form.Text className="text-bold">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={data.password}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" className="g">
              
                Submit to reset password
              </Button>
           
              <Button variant="primary" type="click" className="g">
              
           
              </Button>
            
              <div> 
              <Card body>
    {message && (
      <>
        <h1>{message.message}</h1>
        <p>Success: {message.success ? "Yes " : "No" }</p>
      </>
    )}
  </Card>
              </div>
            </Form>
      </div>
    </div>
  );
}

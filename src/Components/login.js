import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message,setmessage]=useState({
    message:' ',
    sucsess:' '
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    const data = {
      email: formData.email,
      password: formData.password
    }
    
    fetch('https://task41-3m8l.onrender.com/auth/signin', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify(data) // Convert the data to JSON and include it in the request body
    })
    .then((res) => res.json())
    .then((response) => {
        // Handle the response data here
        console.log(response.message); // Log the message directly here
        setmessage({
          message: response.message,
          success: response.success
        });
        
        setFormData({
          email: '',
          password: ''
        });
    })
    .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error(error);
    });
  }
  

  return (
    <div className="a">
      <div className="b">
        <img
          className="c"
          src="https://images.unsplash.com/photo-1606125784258-570fc63c22c1?auto=format&fit=crop&q=80&w=1961&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
        <div className="d">
          <h1> Login Page</h1>
          <div className="r">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={formData.email}
                />
                <Form.Text className="text-bold">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit" className="g">
              
                Submit to login
              </Button>
              <Link to='/forgot'>
              <Button variant="primary" type="click" className="g">
              
                forgot password
              </Button>
              </Link>
          
            </Form>
                                                            
          
          </div>
          <div className='t'> 
          <div className='t'>
  <Card body>
    {message && (
      <>
        <h1>{message.message}</h1>
        <p>Success: {message.success ? "Yes" : "No" }</p>
      </>
    )}
  </Card>
</div>
         
          </div>
        </div>
      </div>
      
    </div>
  
  );
}

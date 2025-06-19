// Login.js
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('popx-user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      nav('/profile');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Container className="container shadow-lg justify-content-center mb-4 py-4">
      <h2 className="fw-bold mb-3">Signin to your PopX account</h2>
      <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label className="text-purple">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="text-purple">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="btn-disabled w-100" size="xs" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
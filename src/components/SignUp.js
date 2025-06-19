// Signup.js
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { useState } from 'react';

function SignUp() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes',
    description: '',
    photo: '',
    createdAt: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('popx-user', JSON.stringify(formData));
    nav('/profile');
  };

  return (
<Container className="container min-vh-100 d-flex flex-column justify-content-between">
  <div className="shadow-lg">
    <div className="form-Heading">
      <h2 className="fw-bold">Create your PopX account</h2>
    </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-purple mb-0">Full Name<span className='Asterisk'>*</span></Form.Label>
            <Form.Control
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-purple mb-0">Phone number<span className='Asterisk'>*</span></Form.Label>
            <Form.Control
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-purple mb-0">Email address<span className='Asterisk'>*</span></Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-purple mb-0">Password<span className='Asterisk'>*</span></Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-purple mb-0">Company name</Form.Label>
            <Form.Control
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-purple mb-0">About You</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Write something about yourself..."
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="text-purple mb-0">Upload Profile Picture<span className='Asterisk'>*</span></Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="photo"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Label>Are you an Agency?<span className='Asterisk'>*</span></Form.Label>
          <div className="checkradio mb-4">
            <Form.Check
              inline
              label="Yes"
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === 'yes'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              label="No"
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === 'no'}
              onChange={handleChange}
            />
          </div>

          <Button className="button-color sticky-bottom w-100 mt-3" size="lg" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default SignUp;
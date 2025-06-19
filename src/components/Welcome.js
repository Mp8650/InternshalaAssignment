import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

function Welcome() {
  const nav = useNavigate();

  return (
    <Container className="shadow-lg d-flex flex-column vh-100 mb-4 pb-5">
        <div className='container'>
      <h2 className="fw-bold mb-3">Welcome to PopX</h2>
      <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Button className=" button-color sticky-botton mb-3" size="lg" onClick={() => nav('/signup')}>
        Create Account
      </Button>
      <Button className='button-light-color w-100' size="lg" onClick={() => nav('/login')}>
        Already Registered? Login
      </Button>
      </div>
    </Container>
  );
}

export default Welcome;
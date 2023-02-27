import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from 'redux/auth/operations';
import {
  Container,
  Form,
  Title,
  Fields,
  Label,
  Input,
  Btn,
} from './LoginPage.styled';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      await dispatch(logIn(values)).unwrap();
      form.reset();
      toast.success('Success');
      navigate('/contacts', { replace: true });
    } catch {
      toast.error('Error');
    }
  };

  return (
    <Container>
      <Form action="#" onSubmit={handleSubmit}>
        <Title>Login page</Title>

        <Fields>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
          />
        </Fields>

        <Fields>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
          />
        </Fields>

        <Btn type="submit">Sign in</Btn>
      </Form>
    </Container>
  );
};

export default LoginPage;

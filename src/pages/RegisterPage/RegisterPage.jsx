import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/operations';
import {
  Container,
  Form,
  Title,
  Fields,
  Label,
  Input,
  Btn,
  HaveLink,
} from './RegisterPage.styled';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    const { value, name } = event.target;

    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);
      await dispatch(register(values)).unwrap();

      setIsLoading(false);
      toast.success('Success!');
    } catch (e) {
      console.log(e);
      toast.error('Some error');
    }
  };

  return (
    <Container>
      {isLoading && <p>Loading ...</p>}

      <Form action="#" onSubmit={handleSubmit}>
        <Title>Please sing up</Title>

        <Fields>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </Fields>

        <Fields>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </Fields>

        <Fields>
          <Label htmlFor="password">Password </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </Fields>

        <Btn type="submit">Sign up</Btn>

        <HaveLink to="/login">Already have an account?</HaveLink>
      </Form>
    </Container>
  );
};

export default RegisterPage;

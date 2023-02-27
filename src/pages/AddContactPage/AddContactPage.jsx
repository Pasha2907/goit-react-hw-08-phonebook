import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Form,
  Title,
  Fields,
  Label,
  Input,
  Btn,
} from './AddContactPage.styled';

const AddContactPage = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const Contact = {
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === Contact.name.toLowerCase()
      )
    ) {
      return toast.warning(`${Contact.name} is already in contacts.`);
    }

    dispatch(addContact(Contact));

    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Form action="#" onSubmit={handleSubmit}>
        <Title>Add new contact details</Title>

        <Fields>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            className="form-control"
            onChange={handleChange}
            value={name}
          />
        </Fields>

        <Fields>
          <Label htmlFor="number">Number</Label>
          <Input
            id="number"
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            className="form-control"
            onChange={handleChange}
            value={number}
          />
        </Fields>

        <Btn type="submit">Add contact</Btn>
      </Form>
    </Container>
  );
};

export default AddContactPage;

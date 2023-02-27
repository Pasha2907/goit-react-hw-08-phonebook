import { useDispatch, useSelector } from 'react-redux';

import { ContactItem } from '../../components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';
import { selectFilteredContacts } from '../../redux/filter/selector';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectAuthToken } from 'redux/auth/selectors';
import { Prevention, List } from './ContactsPage.styled';

const ContactsPage = () => {
  const filteredList = useSelector(selectFilteredContacts);
  const token = useSelector(selectAuthToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return (
    <>
      <Filter />

      {filteredList.length === 0 ? (
        <Prevention>Let's add something here!</Prevention>
      ) : (
        <List className="list-group">
          {filteredList.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactsPage;

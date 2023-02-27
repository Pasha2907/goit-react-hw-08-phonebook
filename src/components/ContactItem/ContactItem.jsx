import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Item, Info, Btn } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item className="list-group-item d-flex justify-content-between align-items-center">
      <Info className="m-0">
        {name} : {number}{' '}
      </Info>
      <Btn
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleDelete}
      >
        Delete
      </Btn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { User, Text, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <User>
      <Text>Welcome, {user.name}</Text>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </User>
  );
};

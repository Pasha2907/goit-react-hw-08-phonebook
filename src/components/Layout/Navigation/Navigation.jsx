import { Logo } from 'components/Logo/Logo';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Nav, List, MenuLink } from './Navigation.styled';

export const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div>
        <Nav>
          <Logo />
          {loggedIn && <UserMenu />}

          {!loggedIn ? (
            <List>
              <MenuLink to="">Home page</MenuLink>
              <MenuLink to="/login">Sign in</MenuLink>
              <MenuLink to="/register">Register</MenuLink>
            </List>
          ) : (
            <List>
              <MenuLink to="/contacts">Contacts</MenuLink>
              <MenuLink to="/add-contact">Add contact</MenuLink>
            </List>
          )}
        </Nav>
      </div>
    </>
  );
};

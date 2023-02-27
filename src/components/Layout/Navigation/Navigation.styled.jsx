import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const MenuLink = styled(NavLink)`
  width: 150px;
  height: 50px;
  margin: auto;
  text-align: center;
  font-weight: 650;
  font-size: 20px;
  color: #4b0082;
  text-decoration: none;
  transition: 250ms color ease;
  :hover,
  :focus {
    color: #f0f8ff;
  }
  &.active {
    color: #f0f8ff;
    text-decoration: underline;
  }
`;

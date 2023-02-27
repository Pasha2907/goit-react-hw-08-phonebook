import styled from '@emotion/styled';

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
export const Btn = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 20px;
  border-radius: 30px;
  border: none;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;
  :hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

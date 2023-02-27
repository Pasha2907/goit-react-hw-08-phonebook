import { Sidebar } from './Sidebar/Sidebar';
import { Container, Main } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <div>
        <Sidebar />
        <Main>
          <div>{children}</div>
        </Main>
      </div>
    </Container>
  );
};

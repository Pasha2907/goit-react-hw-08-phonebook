import image from './home.png';
import {
  HomeImg,
  Hero,
  Info,
  MainTitle,
  Title,
  Text,
  List,
  Item,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Hero>
      <HomeImg src={image} alt="phone_book" />
      <Info>
        <MainTitle>
          Hello! This is the simplest and easiest phone book!
        </MainTitle>
        <Text>
          This application will allow you to organize your contacts and find the
          one you need in seconds. Some advantages of our application:
        </Text>
        <List>
          <Item>Simplicity</Item>
          <Item>Accessibility</Item>
          <Item>Speed</Item>
        </List>
        <Title className="card-title">Register now and enjoy!</Title>
      </Info>
    </Hero>
  );
};

export default HomePage;

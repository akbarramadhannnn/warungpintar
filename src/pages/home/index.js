import { Link } from 'react-router-dom';
import HomeWrapper from './HomeStyles';

const Index = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to My Store</h1>
      <h1>Please, Check it Out in Here</h1>
      <Link to="/products">See Our Products</Link>
    </HomeWrapper>
  );
};

export default Index;

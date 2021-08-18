import { Link } from 'react-router-dom';
import CardWrapper, {
  Card,
  ImageWrapper,
  InfoWrapper,
  TitleWrapper,
} from './ProductListStyles';
import { ReplaceToSlug } from '../../utils/replace';

const Index = ({ data }) => {
  return (
    <CardWrapper>
      {data.map((d, i) => {
        return (
          <Card key={i}>
            <Link to={`/products/detail/${ReplaceToSlug(d.name)}`}>
              <ImageWrapper>
                <img src={d.imageurl} alt="Products" />
              </ImageWrapper>

              <InfoWrapper>
                <TitleWrapper>
                  <h1>{d.name}</h1>
                </TitleWrapper>
              </InfoWrapper>
            </Link>
          </Card>
        );
      })}
    </CardWrapper>
  );
};

export default Index;

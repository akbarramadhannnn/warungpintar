import CardWrapper, {
  ImageWrapper,
  InfoWrapper,
  HeadInfo,
  TitleWrapper,
  RatingWrapper,
  PriceWrapper,
} from './ProductDetailStyles';

const Index = ({ data }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        {data.imageurl && <img src={data.imageurl} alt="Products" />}
      </ImageWrapper>

      <InfoWrapper>
        <HeadInfo>
          {data.name && (
            <TitleWrapper>
              <h1>{data.name}</h1>
            </TitleWrapper>
          )}
          {data.rating && (
            <RatingWrapper>
              <i className="star"></i>
              <h1>{data.rating}</h1>
            </RatingWrapper>
          )}
        </HeadInfo>

        {data.price && (
          <PriceWrapper>
            <h1>$ {data.price}</h1>
          </PriceWrapper>
        )}
      </InfoWrapper>
    </CardWrapper>
  );
};

export default Index;

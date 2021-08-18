import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background: #ffff;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100px;
  }
`;

export const InfoWrapper = styled.div`
  height: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 15px;
`;

export const TitleWrapper = styled.div`
  display: inline-block;
  h1 {
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 1px;
    color: var(--N700, rgba(49, 53, 59, 0.96));

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export default CardWrapper;

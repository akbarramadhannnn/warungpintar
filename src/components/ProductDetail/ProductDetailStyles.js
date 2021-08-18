import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
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
    height: 220px;
  }
`;

export const InfoWrapper = styled.div`
  height: auto;
  margin-top: 5px;
`;

export const HeadInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: inline-block;

  h1 {
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    font-size: 21px;
    line-height: 18px;
    letter-spacing: 1px;
    color: var(--N700, rgba(49, 53, 59, 0.96));

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;

  .star {
    position: relative;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 1.2em;
    border-right: 0.3em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 0.3em solid transparent;
    font-size: 15px;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 8px;
    }

    &:before,
    &:after {
      content: '';

      display: block;
      width: 0;
      height: 0;

      position: absolute;
      top: 0.6em;
      left: -1em;

      border-right: 1em solid transparent;
      border-bottom: 0.7em solid #fc0;
      border-left: 1em solid transparent;

      transform: rotate(-35deg);
    }

    &:after {
      transform: rotate(35deg);
    }
  }

  h1 {
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 1px;
    color: var(--N700, rgba(49, 53, 59, 0.95));

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const PriceWrapper = styled.div`
  margin-top: 10px;
  h1 {
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: var(--N700, rgba(49, 53, 59, 1));

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export default CardWrapper;

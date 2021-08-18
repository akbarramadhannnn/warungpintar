import styled from 'styled-components';

const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 1px;
    color: var(--N700, rgba(49, 53, 59, 0.96));

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 14px;
      line-height: 25px;
    }
  }

  a {
    text-decoration: none;
    line-height: 25px;
    font-size: 18px;
    color: #007fff;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 13px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default HomeWrapper;

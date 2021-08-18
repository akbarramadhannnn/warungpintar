import styled from 'styled-components';

const Layout = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  position: relative;
  padding: 0px 50px;
  flex: 1;
  background: rgb(255, 255, 255);

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0px 30px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0px 30px;
  }
`;

export default Layout;

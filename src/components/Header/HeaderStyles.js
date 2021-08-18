import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  height: 70px;
  width: 100%;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
  background: rgb(255, 255, 255);
  z-index: 999;
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 10px 0px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px 0px;
  }
`;

export const Menu = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const MenuList = styled.li`
  padding: 0px 0px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: rgba(49, 53, 59, 0.96);
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Header;

import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.main};

  & .nav__list {
    display: flex;
    column-gap: 20px;
  }
  & .nav__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .nav__link {
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: center;

    column-gap: 10px;
    cursor: pointer;
  }
`;

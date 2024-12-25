import styled from "styled-components";

export const HomeWrapper = styled.div`
  color: ${({ theme }) => theme.main};

  & .hero__section {
    & .container {
      display: flex;
      justify-content: space-between;
    }
  }

  & .hero__description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 10px;
    width: 40%;
  }

  & .hero__description-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
  }

  & .hero__info {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  & .hero__info-icon {
    font-size: 40px;
  }

  & .hero__info-text {
  }

  & .hero__addition {
    width: 40%;
  }
  & .hero__addition-image {
    width: 100%;
  }
`;

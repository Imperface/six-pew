import styled from "styled-components";
import img from "@/images/droneHero.webp";
export const HomeWrapper = styled.div`
  color: ${({ theme }) => theme.main};
  & .hero__section {
    & .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 20px;
    }
  }

  & .hero__title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & .hero__description {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
  }

  & .hero__description-icon {
    font-size: 40px;
  }

  & .hero__description-text {
  }
`;

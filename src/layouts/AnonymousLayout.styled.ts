import styled from "styled-components";
import img from "@/images/droneHero.webp";

export const AnonymousLayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),
    url(${img});

  background-position: 50% 30%;
  background-size: cover;
  background-repeat: no-repeat;

  & .main {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

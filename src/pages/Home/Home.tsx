import { Section } from "@/shared/Section";
import { HomeWrapper } from "./Home.styled";
import { GiSwallow } from "react-icons/gi";
// import { TbDrone } from "react-icons/tb";

import mavicPro from "@/images/mavicPro.webp";
const Home = () => {
  return (
    <HomeWrapper className="home__wrapper">
      <Section className="hero__section">
        <div className="hero__description">
          <h1 className="hero__description-title">
            The steel swallow is a symbol of the Unmanned Systems Forces
          </h1>

          <div className="hero__description-info hero__info">
            <GiSwallow className="hero__info-icon" />
            <p className="hero__info-text">
              Bring victory closer together with the 230th separate logistics
              battalion
            </p>
          </div>
        </div>

        <div className="hero__addition">
          <img className="hero__addition-image" src={mavicPro} alt="" />
        </div>
      </Section>
    </HomeWrapper>
  );
};

export default Home;

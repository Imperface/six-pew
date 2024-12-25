import { Section } from "@/shared/Section";
import { HomeWrapper } from "./Home.styled";
import { GiSwallow } from "react-icons/gi";

const Home = () => {
  return (
    <HomeWrapper>
      <Section className="hero__section">
        <h1 className="hero__title">
          The steel swallow is a symbol of the Unmanned Systems Forces
        </h1>
        <div className="hero__description">
          <GiSwallow className="hero__description-icon" />
          <p className="hero__description-text">
            Bring victory closer together with the 230th separate logistics
            battalion
          </p>
        </div>
      </Section>
    </HomeWrapper>
  );
};

export default Home;

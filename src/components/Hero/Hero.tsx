import React from "react";
import { StyledSection, InfoWrapper, StyledMainTitle} from "./Hero.styled";
function Hero() {
  return (
    <StyledSection>
      <InfoWrapper>
        <StyledMainTitle>
          БЛАГОДІЙНА ОРГАНІЗАЦІЯ "БЛАГОДІЙНИЙ ФОНД "ВОЛОНТЕРИ БАТЬКІВЩИНИ"
        </StyledMainTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          doloribus dolore impedit, nam, nostrum ab adipisci ducimus tempora
          placeat dignissimos vitae voluptatum suscipit perspiciatis
          reprehenderit ad a reiciendis quaerat aspernatur. 
        </p>
        <h3>Основні завдання благодійного фонду:</h3>
        <ul>
          <li>допомога тимчасово переміщеним особам</li>
          <li>допомога війську</li>
          <li>психологічна підтримка тимчасово переміщеним особам</li>
        </ul>
        <a href="#">Детальніше</a>
      </InfoWrapper>
    </StyledSection>
  );
}

export default Hero;

import React from "react";
import { Container } from "../UI/Container.styled";
import {
  StyledSection,
  InfoWrapper,
  StyledMainTitle,
  StyledDesc,
  StyledSecondTitle,
  TasksList,
  TaskItem,
  StyledLink
} from "./Hero.styled";
function Hero() {
  return (
    <StyledSection>
      <Container>
        <InfoWrapper>
          <StyledMainTitle>
            БЛАГОДІЙНА ОРГАНІЗАЦІЯ "БЛАГОДІЙНИЙ ФОНД "ВОЛОНТЕРИ БАТЬКІВЩИНИ""
          </StyledMainTitle>
          <StyledDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            doloribus dolore impedit, nam, nostrum ab adipisci ducimus tempora
            placeat dignissimos vitae voluptatum suscipit perspiciatis
            reprehenderit ad a reiciendis quaerat aspernatur.
          </StyledDesc>
          <StyledSecondTitle>
            Основні завдання благодійного фонду:
          </StyledSecondTitle>
          <TasksList>
            <TaskItem>допомога тимчасово переміщеним особам</TaskItem>
            <TaskItem>допомога війську</TaskItem>
            <TaskItem>психологічна підтримка тимчасово переміщеним особам</TaskItem>
          </TasksList>
          <StyledLink href="#">Детальніше</StyledLink>
        </InfoWrapper>
      </Container>
    </StyledSection>
  );
}

export default Hero;

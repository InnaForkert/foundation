import { Container } from "../UI/Container.styled";
import {AboutSection, SectionWrapper, ImgWrapper, AboutWrapper, WhiteText,Title, SecondTitle, TextWrapper, Descr, MoreBtn } from "./About.styled";
function About() {
  return (
    <AboutSection>
      <Container>
        <SectionWrapper>
        <ImgWrapper>
          <img src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg" alt="наша команда" />
        </ImgWrapper>
        <AboutWrapper>
          <Title><WhiteText>ВОЛОНТЕРИ</WhiteText> БАТЬКІВЩИНИ</Title>
          <SecondTitle>БЛАГОДІЙНИЙ ФОНД</SecondTitle>
          <TextWrapper>
            <Descr>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores officia, aliquam at labore magni numquam animi
              blanditiis corporis fuga placeat odid.
            </Descr>

            <Descr>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores officia, aliquam at labore magni numquam animi
              blanditiis corporis fuga placeat odid.
            </Descr>
            <MoreBtn aria-label="кнопка для отримання детальнішої інформації" type="button">Детальніше</MoreBtn>
          </TextWrapper>
        </AboutWrapper>
      </SectionWrapper>
      </Container>
    </AboutSection>
  );
}

export default About;

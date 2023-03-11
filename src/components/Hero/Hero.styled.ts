import styled from "styled-components";
import heroImg from "../../assets/hero.jpg";

export const StyledSection = styled.section`
  min-height: 100vh;
  padding: 1rem 3rem;
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background: url(${heroImg}) no-repeat 50% / cover;
  @media screen and (min-width: 768px) {
    padding: 3rem 6rem;
  }
`;
export const InfoWrapper = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 500px;
    margin: 0;
    margin-bottom: 32px;
  }
`;

export const StyledMainTitle = styled.h1`
 color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(8)};
`;

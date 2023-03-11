import styled from "styled-components";
import heroImg from "../../assets/hero.jpg";

export const StyledSection = styled.section`
  min-height: 100vh;
  padding-top: 5rem;
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;

export const InfoWrapper = styled.div`
  margin: 0;
  @media screen and (min-width: 768px) {
    max-width: ${({ theme }) => theme.spacing(150)};
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }
`;

export const StyledMainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(8)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledDesc = styled.p`
display: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  @media screen and (min-width: 768px) {
    display: block;
  }`;

export const StyledSecondTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const TasksList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing(5)};  
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const TaskItem = styled.li`
list-style: circle;
&:not(:last-child){
  margin-bottom: ${({ theme }) => theme.spacing(1)};
}
`

export const StyledLink = styled.a`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)};
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
  transition: color 0.3s, border-color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

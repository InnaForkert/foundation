import styled from "styled-components";

export const SocialLinksList = styled.ul`
list-style: none;
display: flex;
gap:${({ theme }) => theme.spacing(3)};
justify-content: flex-start;
 @media screen and (min-width:768px){
     justify-content: flex-end;
  }

`
export const StyledLink = styled.a`
color: ${({ theme }) => theme.colors.dark};
transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  
`
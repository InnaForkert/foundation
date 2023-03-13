import styled from "styled-components";

export const AboutSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 0;
    margin-top: -44px;
    padding-bottom: 80px;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ImgWrapper = styled.div`
  width: 60%;
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const AboutWrapper = styled.div`
  width: 40%;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.spacing(15)};
  font-weight: 700;
  line-height: ${({ theme }) => theme.spacing(17.5)};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.spacing(-3)};
`;
export const WhiteText = styled.span`
 color: ${({ theme }) => theme.colors.white};
`
export const SecondTitle = styled.span`
  display: block;
  text-transform: lowercase;
  margin-top: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  font-size: ${({ theme }) => theme.spacing(6)};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
`;

export const TextWrapper = styled.div`
margin-top: ${({ theme }) => theme.spacing(4)};
`
export const Descr = styled.p`
color: ${({ theme }) => theme.colors.light};
margin-bottom: ${({ theme }) => theme.spacing(4)};
`

export const MoreBtn = styled.button`
padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(5)};
background: transparent;
border: 1px solid ${({ theme }) => theme.colors.gray};
`
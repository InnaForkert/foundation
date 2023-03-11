import styled from "styled-components";

interface IProps {
  open: boolean;
}

export const ModileWrapper = styled.div<IProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
  padding: 16px;
  transition: transform 0.3s;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  padding: 3rem 6rem;
`;

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const StyledItem = styled.li`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(10)};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledCloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const MobileLogo = styled.img`
  display: block;
  width: 50px;
  height: 50px;
`;

export const MobileFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled.h3`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  font-size: ${({ theme }) => theme.spacing(5)};
`;
export const MobileTelList = styled.ul`
margin-bottom:  ${({ theme }) => theme.spacing(5)};
`
export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.spacing(6)};
  transition: color 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

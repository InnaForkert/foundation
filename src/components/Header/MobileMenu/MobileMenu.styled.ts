import styled from "styled-components";

interface IProps {
    open: boolean;
}

export const ModileWrapper = styled.div<IProps>`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100vh;
background-color: ${({ theme }) => theme.colors.light};
transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
transition: transform 0.3s;
display: flex;
align-items: center;
justify-content: center;
`

export const MobileMenuList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: ${({ theme }) => theme.spacing(4)};

`

export const StyledItem = styled.li`
padding: ${({ theme }) => theme.spacing(3)};
color: ${({ theme }) => theme.colors.dark};
font-weight: 700;
font-size: ${({ theme }) => theme.spacing(5)};
`

export const StyledCloseBtn = styled.button`
border: none;
background: transparent;
position: absolute;
top: ${({ theme }) => theme.spacing(5)};
right: ${({ theme }) => theme.spacing(5)};
`
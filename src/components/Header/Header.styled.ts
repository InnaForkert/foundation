import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 12px 15px 12px 23px;
  box-shadow: 1px 1px 3px 1px gray;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled.img`
  display: block;
  width: ${({ theme }) => theme.spacing(15)};
  height: ${({ theme }) => theme.spacing(15)};
`;

export const MobileMenuBtn = styled.button`
  display: block;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

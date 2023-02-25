import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding-inline: 10px;
  box-shadow: 1px 1px 3px 1px gray;
`;

export const Logo = styled.img`
  display: block;
  width: 50px;
  height: 50px;
`;

export const MobileMenuBtn = styled.button`
  display: block;
  background: transparent;
  outline: none;
  border: none;
`;

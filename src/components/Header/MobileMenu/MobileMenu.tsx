import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import {ModileWrapper, MobileMenuList,StyledItem, StyledCloseBtn } from "./MobileMenu.styled";
interface IProps {
  isMobileMenuOpen: boolean;
  open: boolean;
  hideMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: React.FC<IProps> = ({ isMobileMenuOpen, open, hideMenu }) => {
  return (
    <ModileWrapper open={isMobileMenuOpen}>
      <StyledCloseBtn onClick={() => hideMenu(false) } ><AiOutlineClose size={ 25} /></StyledCloseBtn>
      <MobileMenuList >
        <StyledItem>Головна</StyledItem>
        <StyledItem>Про Фонд</StyledItem>
        <StyledItem>Реквізити</StyledItem>
      </MobileMenuList>
    </ModileWrapper>
  );
};

export default MobileMenu;

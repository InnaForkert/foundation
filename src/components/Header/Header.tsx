import React from "react";
import { Logo, MobileMenuBtn, StyledHeader } from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <StyledHeader>
      <Logo src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" />
      <MobileMenuBtn>
        <GiHamburgerMenu size={25} />
      </MobileMenuBtn>
      <MobileMenu />
    </StyledHeader>
  );
}

export default Header;

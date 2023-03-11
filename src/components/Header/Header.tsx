import React, { useState} from "react";
import { Logo, MobileMenuBtn, StyledHeader } from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onMenuClick = () => {
    
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  return (
    <StyledHeader>
      <Logo src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" />
      <MobileMenuBtn>
        <GiHamburgerMenu size={25} onClick={onMenuClick} z-index={ 50} />
      </MobileMenuBtn >
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} open hideMenu={setIsMobileMenuOpen} />
    </StyledHeader>
  );
}

export default Header;

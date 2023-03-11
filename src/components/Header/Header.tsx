import React, { useState} from "react";
import { Logo, MobileMenuBtn, StyledHeader } from "./Header.styled";
import MobileMenu from "./MobileMenu/MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import logoImg from '../../assets/logo.jpg';
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onMenuClick = () => {
    
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  
  return (
    <StyledHeader>
      <Logo src={logoImg } alt="логотип благодійної організації"/>
      <MobileMenuBtn>
        <GiHamburgerMenu size={25} onClick={onMenuClick} z-index={ 50} />
      </MobileMenuBtn >
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} open hideMenu={setIsMobileMenuOpen} />
    </StyledHeader>
  );
}

export default Header;

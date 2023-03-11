import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import logoImg from '../../../assets/logo.jpg';
import  SocialLinks from '../../SocialLinks/SocialLinks';
import {
  ModileWrapper,
  LogoWrapper,
  MobileMenuList,
  StyledItem,
  StyledCloseBtn,
  MobileLogo,
  MobileFooter,
  StyledTitle,
  MobileTelList,
  StyledLink
} from "./MobileMenu.styled";
interface IProps {
  isMobileMenuOpen: boolean;
  open: boolean;
  hideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<IProps> = ({ isMobileMenuOpen, open, hideMenu }) => {
  return (
    <ModileWrapper open={isMobileMenuOpen}>
      <LogoWrapper>
        <MobileLogo
          src={ logoImg}
          alt="логотип благодійної організації"
        />
        <StyledCloseBtn
          aria-label="кнопка закриття мобільного меню"
          onClick={() => hideMenu(false)}
        >
          <AiOutlineClose size={25} />
        </StyledCloseBtn>
      </LogoWrapper>
      <MobileMenuList>
        <StyledItem>Головна</StyledItem>
        <StyledItem>Про Фонд</StyledItem>
        <StyledItem>Реквізити</StyledItem>
      </MobileMenuList>
      <MobileFooter>
        <div>
          <StyledTitle>Телефони підтримки</StyledTitle>
          <MobileTelList>
            <li><StyledLink href="tel:+380636366363">+380 63 636 63 63</StyledLink></li>
            <li><StyledLink href="tel:+380636366363">+380 63 636 63 63</StyledLink></li>
          </MobileTelList>

          <StyledTitle>По іншим питанням:</StyledTitle>
          <span>
            <StyledLink href="mailto:ourFondMail@gmai.com">ourFondMail@gmai.com</StyledLink>
          </span>
        </div>
        <div>
          <StyledTitle>Ми у соціальних мережах:</StyledTitle>
          <SocialLinks/>
        </div>
      </MobileFooter>
    </ModileWrapper>
  );
};

export default MobileMenu;

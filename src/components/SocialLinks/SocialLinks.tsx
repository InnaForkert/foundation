import React from "react";
import { BsInstagram, BsFacebook, BsTelegram, BsTwitter } from "react-icons/bs";
import { SocialLinksList, StyledLink } from "./SocialLinks.styled";

const SocialLinks = () => {
  return (
    <SocialLinksList>
      <li>
        <StyledLink href="#">
          <BsInstagram size={25} />
        </StyledLink>
      </li>
      <li>
        <StyledLink href="#">
          <BsFacebook size={25} />
        </StyledLink>
      </li>
      <li>
        <StyledLink href="#">
          <BsTelegram size={25} />
        </StyledLink>
      </li>
      <li>
        <StyledLink href="#">
          <BsTwitter size={25} />
        </StyledLink>
      </li>
    </SocialLinksList>
  );
};

export default SocialLinks;

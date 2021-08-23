import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () =>{
return(
  <FooterContainer>
    <FooterWrap>
    <SocialMedia>
    <SocialMediaWrap>
    <SocialLogo to="/">Pizza</SocialLogo>
    <SocialIcons>
      <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener moreferrer">
        <FaFacebook/>
      </SocialIconLink>
      <SocialIconLink href="/" target="_blank" arial-label="Instagram" rel="noopener moreferrer">
        <FaInstagram/>
      </SocialIconLink>
      <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="noopener moreferrer">
        <FaYoutube/>
      </SocialIconLink>
      <SocialIconLink href="/" target="_blank" arial-label="Twitter" rel="noopener moreferrer">
        <FaTwitter/>
      </SocialIconLink>
      <SocialIconLink href="/" target="_blank" arial-label="Linkedin" rel="noopener moreferrer">
        <FaLinkedin/>
      </SocialIconLink>
    </SocialIcons>
    </SocialMediaWrap>
    </SocialMedia>
    </FooterWrap>
  </FooterContainer>
);

};

export default Footer;
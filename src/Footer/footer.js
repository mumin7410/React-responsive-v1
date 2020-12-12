import React,{useState} from 'react'
import { Button } from '../components/Navbar/Navbar.elements'
import { FooterContainer,
    FooterSubheading,
    FooterSubscription,
    FooterSubtext,
    Form,FormInput,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIcons,
    SocialIconLink,
    WebsiteRight
} 
from './footer.elements'
import { Link } from 'react-router-dom'
import { FaFacebook,FaInstagram,FaLinkedin,FaYoutube} from 'react-icons/fa'


const Footer = () => {
    const [value, setvalue] = useState('')
    const handleSubmit = (e) =>  {
        setvalue('')
        e.preventDefault();
    }
    return (
        <div>
            <FooterContainer>
                <FooterSubscription>
                    <FooterSubheading>
                        Join our exclusive membership to recieved
                        the promotion  
                    </FooterSubheading>
                    <FooterSubtext>
                        You can contact us any time 
                    </FooterSubtext>
                    <Form>
                        <FormInput name='email' type='email' placeholder='Your email' value={value} onChange = {(e) => {setvalue(e.target.value)}}/>
                            <Button fontBig onClick={handleSubmit}>Subscribe</Button>         
                    </Form>
                </FooterSubscription>
                <FooterLinkContainer> 
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                        </FooterLinkItem>
                        </FooterLinkWrapper>
                        
                        <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>About Us</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                </FooterLinkContainer>

                <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    SBUILT
                </SocialLogo>
                
                <SocialIcons>
                    <SocialIconLink href='/' aria-label='FaceBook' target='_blank'> 
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' aria-label='Instragram' target='_blank'> 
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' aria-label='Youtube' target='_blank'> 
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' aria-label='Linkedin' target='_blank'> 
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer>
        </div>
    )
}

export default Footer

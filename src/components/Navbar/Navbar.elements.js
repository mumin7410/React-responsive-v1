import styled from 'styled-components'
import { Container } from '../../globalStyles'
import { TiAnchorOutline } from "react-icons/ti"
import {Link} from 'react-router-dom';
import { AiTwotoneHome} from 'react-icons/ai'


export const Nav = styled.nav` //Nav section 
background:#101522;
height:80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.1rem;
position:sticky;
top:0;
z-index:999;
`

export const Navbarcontainer = styled(Container)` //Navbar container 
    display:flex;
    justify-content:space-between;
    height:80px;
    ${Container}
`

export const Navlogo = styled(Link)` //Navlogo include text and icon 
 color:#ffff;
 justify-content:flex-start;
 cursor:pointer;
 text-decoration:none;
 font-size:1.8rem;
 display:flex;
 align-items:center;

`

export const Navicon = styled(AiTwotoneHome)` //hmaberger icon 
 margin-right:0.5rem;
 color:#cecece;
`

export const HambergerIcon = styled.div` //hamberger icon container  
 display:none;

 @media screen and (max-width: 960px){
 position:absolute;
 right:0;
 top:0;
 display:block;
 transform:translate(-100%,60%);
 font-size:1.6rem;
 cursor:pointer;
 }
`

export const NavMenu = styled.ul` //ul ตัวครอบทั้ง li a
display:flex;
align-items:center;
text-align:center;
list-style:none; //เอาจุดดำออก 
justify-content:center;

@media screen and (max-width: 960px){ //หน้าจอต่ำกว่า 960px  
display:flex;
flex-direction:column;
width:100%;
height:90vh;
position:absolute;
top:80px; //top 80 px เพราะต้องเว้นระยะจาก nav ด้านบน 
left: ${({click}) => (click ? 0 : '-100%')};
opacity:1;
transition:0.3s;
background:#101522;
padding:5px;
}
`


export const  NavItem = styled.li` //li ครอบ a 
height:80px;
border-bottom:2px solid transparent;
margin-right:5px;
&:hover{
    border-bottom:2px solid #cecece;
}

@media screen and (max-width:960px){
width:100%;

&:hover{
    border:none;
}
}
`
export const NavLink = styled(Link)`
color:#fff;
display:flex;
text-decoration:none;
align-items:center;
padding: 0.5rem 1rem;
height:100%;

@media screen and (max-width:960px){
    width:100%;
    padding:1rem;
    display:table;

    &:hover{
        color:#4b59f7;
        transition: 0.3s
    }

}
`

export const Button = styled.button` //Button 
border-radius: 18px;
background:${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
white-space:nowrap;
padding:${({Big}) => Big ? '12px 64px' : '8px 20px' };
color:#fff;
font-size:${({fontBig}) => fontBig ? '20px' : '16px'};
cursor:pointer;
outline:none;
border:none;
&:hover{
    transition:0.3s;
    background:${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
}
@media screen and (max-width:960px){
    width:100%;
    
}
`

export const NavBtn = styled(Link)`

@media screen and (max-width:960px){
width:100%;
}
`
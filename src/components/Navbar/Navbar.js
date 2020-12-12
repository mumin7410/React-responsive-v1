import React,{ useState }  from 'react'
import {Button,Nav,Navbarcontainer,Navlogo,Navicon,HambergerIcon,NavMenu,NavItem,NavLink, NavBtn} from './Navbar.elements'
import { FaBars, FaTimes,  } from "react-icons/fa"
import { IconContext } from "react-icons";

const Navbar = () => {
    const [click, setclick] = useState(false)
    const clickedHandler = () => {
        setclick(!click)
    }
    return (
        <>
            <IconContext.Provider value={{ color: "#ffff",}}>
                <Nav>
                <Navbarcontainer>
                    <Navlogo to='/'>
                        <Navicon />
                        SBUILT
                    </Navlogo>
                    <HambergerIcon onClick={clickedHandler}>{click ? <FaTimes /> : <FaBars />}</HambergerIcon>
                    <NavMenu onClick={clickedHandler} click={click}>
                        <NavItem >
                            <NavLink to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/About'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/Contact'>Contact</NavLink>
                        </NavItem>
                        <NavBtn to='/SignUp'>
                            <Button primary>SIGNUP</Button>
                        </NavBtn>
                        
                    </NavMenu>
                    </Navbarcontainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

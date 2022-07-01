import { NavbarStyled } from "../styles/Navbar.styled"
import { IoHome } from "react-icons/io5"
import { BsUiChecksGrid } from "react-icons/bs"
import { SiAboutdotme } from "react-icons/si"
import { MdOutlinePermContactCalendar } from "react-icons/md"
import styled from "styled-components"

import { RiGithubLine } from "react-icons/ri"
import { SiGmail } from "react-icons/si"
import { Bottom } from "../styles/Bottom.styled"

const A = styled.a`
    & 
    {
    text-decoration: none;
    /* color: inherit;
    border-bottom: dotted 1px rgba(128,128,128,0.5);
    -moz-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
    -webkit-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
    -o-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
    -ms-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
    transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
    outline: 0; */
    }
`

import { LogoStyled, ImageLogo } from "../styles/Logo.styled"

const Props = {
    "name":"Christopher Silva",
    "desc":"Javascript Enthusiast",
    logo:{    
        src:"./Sem título2.png",
        "color": "#f00"
    }

}

export const Logo: React.FC = ():JSX.Element => {
    return (
        <LogoStyled>
            <span id={"img48"}>
                <ImageLogo src={Props.logo["src"]} alt={''} />
            </span>
            <h1>{Props["name"]}</h1>
            <span id="byline">{Props["desc"]}</span>
        </LogoStyled>
    )
}

export const Navbar = ():JSX.Element => {
    return (
        <NavbarStyled>
                <ul>
                    <li><A><IoHome /><span> Intro</span></A></li>
                    <li><A><BsUiChecksGrid /><span>Portfolio</span></A></li>
                    <li><A><SiAboutdotme /><span>About Me</span></A></li>
                    <li><A><MdOutlinePermContactCalendar /><span>Contact</span></A></li>
                </ul>
        </NavbarStyled>
    )
}

export const Botton = ():JSX.Element => {
    return(
        <Bottom>
            <ul className="icons">
            <li><a href="#" className="icon icon-github" ><RiGithubLine /><span>Github</span></a></li>
            <li><a href="#" className="icon icon-envelope"><SiGmail /><span>Email</span></a></li>
            </ul>
        </Bottom>
    )

}
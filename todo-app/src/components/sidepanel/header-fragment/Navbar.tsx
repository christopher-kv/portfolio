import { NavbarStyled } from "../styles/Navbar.styled"
import { IoHome } from "react-icons/io5"
import { BsUiChecksGrid } from "react-icons/bs"
import { SiAboutdotme } from "react-icons/si"
import { MdOutlinePermContactCalendar } from "react-icons/md"
import styled from "styled-components"


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
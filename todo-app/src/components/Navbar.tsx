import { NavbarStyled, Icon } from "./styles/Navbar.styled"
import { TiHome } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <NavbarStyled>
                <ul>
                    <li><a href="#top" id="top-link" ><TiHome />Intro</a></li>
                    <li><a href="#portfolio" id="portfolio-link" ><Icon className={"icon icon-th"}>Portfolio</Icon></a></li>
                    <li><a href="#about" id="about-link" ><Icon className={"icon icon-user"}>About Me</Icon></a></li>
                    <li><a href="#contact" id="contact-link" ><Icon className={"icon icon-envelope"}>Contact</Icon></a></li>
                </ul>
        </NavbarStyled>
    )
}
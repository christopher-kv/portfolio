import { RiGithubLine } from "react-icons/ri"
import { SiGmail } from "react-icons/si"
import { Bottom } from "../styles/Bottom.styled"
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
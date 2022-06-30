import { Top } from "./sidepanel/header-fragment/Top"
import  {HeaderStyled} from "./sidepanel/styles/Header.styled"
export const Header = () => {
  return (
      <HeaderStyled>
        <Top />
         <div className={"bottom"}>
            <ul className={"icons"}>
              <li><a href="#" className={"icon icon-twitter"}><span>Twitter</span></a></li>
              <li><a href="#" className={"icon icon-facebook"}><span>Facebook</span></a></li>
              <li><a href="#" className={"icon icon-github"}><span>Github</span></a></li>
              <li><a href="#" className={"icon icon-dribbble"}><span>Dribbble</span></a></li>
              <li><a href="#" className={"icon icon-envelope"}><span>Email</span></a></li>
            </ul>
          </div>
      </HeaderStyled>
  )
}

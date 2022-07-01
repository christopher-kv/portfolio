import { Botton } from "./header-fragment/Navbar"
import { Top } from "./header-fragment/Top"
import { SidePanelStyled } from "./styles/SidePanel.styled"

export const SidePanel = () => {
    return(
    <SidePanelStyled>
        <Top />
        <Botton />
    </SidePanelStyled> 
    )
}
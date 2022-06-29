import { Header } from "./Header"
import { HeaderTop } from "./styles/HeaderTop.styled"
import { SidePanelStyled } from "./styles/SidePanel.styled"

export const SidePanel = ()=>{
    return(
        <SidePanelStyled>
            <HeaderTop>
                <Header/>
            </HeaderTop>
        </SidePanelStyled>
    )
}
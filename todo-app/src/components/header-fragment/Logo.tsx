import { LogoStyled, ImageLogo } from "../styles/Logo.styled"

const logo_desc = {
    logo:{
        "name":"Christopher Silva",
        "desc":"Javascript Enthusiast",
        "src":"./public/Sem título2.png",
        "color": "#f00"
    }

}

export const Logo = () =>{
    return(
        <LogoStyled>   
            <span>
                <ImageLogo src={logo_desc.logo.src}/>
            </span>
            <h1>{logo_desc.logo.name}</h1>
            <span>{logo_desc.logo.desc}</span>
        </LogoStyled>
    )
}
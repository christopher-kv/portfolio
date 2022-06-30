import { LogoStyled, ImageLogo } from "../styles/Logo.styled"

const Props = {
    "name":"Christopher Silva",
    "desc":"Javascript Enthusiast",
    logo:{    
        src:"./Sem título2.png",
        "color": "#f00"
    }

}

export const Logo: React.FC = () => {
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
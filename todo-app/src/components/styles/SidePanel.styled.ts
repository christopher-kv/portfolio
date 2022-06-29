import styled from "styled-components";

export const SidePanelStyled = styled.div`
@media only screen and (max-width: 800px) {
    position:relative;
    backface-visibility: hidden;
    transition: transform 0.25s ease-in-out 0s;
    z-index: 10001;
    position: fixed;
    display: block;
    width: 240px;
    overflow-y: auto;
    top: 0px;
    left: -240px;
    height: 100%;
    transform: translate(240px, 0px);
    }
`

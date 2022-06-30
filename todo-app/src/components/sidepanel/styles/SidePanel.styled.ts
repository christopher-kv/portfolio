import styled from "styled-components";

export const SidePanelStyled = styled.section`
    &{
    position: fixed;
    top: 0;
    left: 0;
    width: 375px;
    height: 100%;
    color: #fff;
    background: #222729 url(images/overlay.png);
    box-shadow: inset -0.25em 0 0.25em 0 rgb(0 0 0 / 13%);
    text-align: right;
    }
    @media screen and (max-width: 600px) {
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

import styled from "styled-components";

export const Bottom = styled.div`
    &
    {
    border-style:solid;
    /* border-width:2px;
    border-top:2px; */
    border-color:white;
    position: absolute;
    text-align: center;
    left: 0;
    bottom: 0;
    width: 100%;
    }
    & ul svg {
        width:2em;
        height:38px;
        cursor: default;
        font-size: 0.8em;
        margin: 0 0 1em 0;
        text-align: center;
    }
    & a
    {
        display: inline-block;
        width: 2em;
        height: 2em;
        line-height: 2em;
        text-align: center;
        border: 0;
    }
    & a:hover
    {
        color: #8E98B8;
        border-bottom-color: rgba(255,255,255,0);
    }
    & a > span
    {
    display: none;
    }
    & li{
        display: inline-block;
        height:38px;
        width:38px;
    }
` 
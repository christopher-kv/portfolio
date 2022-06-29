import styled from "styled-components";

export const LogoStyled = styled.div`
	display:grid;
	position: relative;
	margin: 1.75em 1.5em 1.5em 1.5em;
	min-height: 48px;
	cursor: default;
	
    & h1
		{
			position: relative;
			color: #fff;
			font-weight: 600;
			font-size: 1em;
			line-height: 1em;
		}
	
	& > span
		{
			position: relative;
			display: block;
			font-size: 0.6em;
			color: rgba(255,255,255,0.5);
			line-height: 1.25em;
			margin: 0.5em 0 0 0;
		}
		
	& .image
		{	
			position: absolute;
			left: 0;
			top: 0;
		}
	& .byline{
		position: relative;
		display: block;
		font-size: 0.6em;
		color: rgba(255,255,255,0.5);
		line-height: 1.25em;
		margin: 0.5em 0 0 0;
	}

`

export const ImageLogo = styled.img`
	background-image: url(${(theme) => theme.src});
	width: 48px;
	height: 48px;
	background: ${(theme) => theme.color};
`
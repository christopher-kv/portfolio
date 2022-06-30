import styled from "styled-components";

export const LogoStyled = styled.div`
	&
	{
		position: relative;
		margin: 2.75em 2em 2em 2em;
		min-height: 48px;
		cursor: default;
	}
		& img
		{
			position: absolute;
			left: 0;
			top: 0;
		}
			& h1
			{
				
				position: relative;
				color: #fff;
				margin-bottom:0.5em;
				font-weight: 400;
				font-size: 1.4em;
				line-height: 0.5em;
			}
				& #byline
				{
					position: relative;
					display: block;
					font-size: 1.0em;
					color: rgba(255,255,255,0.5);
					line-height: 1.25em;
					margin: 0.5em 0 0 0;
				}
	/* position: relative;
    margin: 1.75em 1.5em 1.5em 1.5em;
    min-height: 48px;
    cursor: default;

	& span#img48{
		display:block;
		margin: 0px;
		width:48px;
		position: fixed;
	}

	@media only screen and (max-width: 600px) {
		position: relative;
		display: block;
		font-size: 0.6em;
		margin: 1.75em 1.5em 1.5em 1.5em;
		color: rgba(255,255,255,0.5);
		line-height: 1.25em;
		
		
		&
		{
			margin: 1.75em 1.5em 1.5em 1.5em;			
		}
		& h1{
			color: #fff;
			font-weight: 600;
			font-size: 1em;
			line-height: 1em;
		}
	}
    & h1
		{
			position: fixed;
			margin: 0px;
			color: #fff;
			font-weight: 600;
			font-size: 1.2em;
			line-height: 1em;
		}
	
	& span
		{
			position: fixed;
			display: block;
			font-size: 0.8em;
			color: rgba(255,255,255,0.5);
			line-height: 1.25em;
			margin: 1em 0 0 0;
		}
		
	
		& span img
		{	
			position: absolute;
			left: 48px;
			top: 48px;
		}

	& img
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
	} */

`

export const ImageLogo = styled.img`
	display:absolute;
	width: 48px;
	height: 48px;
	margin-bottom:20px;
	background: ${(theme) => theme.color};
`
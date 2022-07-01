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
			
	@media screen and (max-width: 600px) {
		display:flex;
		flex-direction:row;
		align-items:center;
		gap: 0.2em;
			& img
			{
				flex-basis:2px;
				display:block;
				position: absolute;
				z-index:999;
				left: 0;
				top: 0;
			}
				& h1
					{
						flex-grow:2;
						display:block;
						position: absolute;
						color: #fff;
						margin-bottom:0.5em;
						font-weight: 400;
						font-size: .5em;
						line-height: 0.5em;
					}
						& #byline
						{
							position: absolute;
							display: block;
							font-size: 0.8em;
							color: rgba(255,255,255,0.5);
							line-height: .5em;
							margin: 0.5em 0 0 0;
						}
    }

`

export const ImageLogo = styled.img`
	display:absolute;
	width: 48px;
	height: 48px;
	margin-bottom:20px;
	background: ${(theme) => theme.color};
`
import styled from "styled-components";

export const HeaderStyled = styled.header`
    &
	{
		position: fixed;
		top: 0;
		left: 0;
		width: 375px;
		height: 100%;
		color: #fff;
		background: #222729 url('./overlay.png');
		box-shadow: inset -0.25em 0 0.25em 0 rgba(0,0,0,0.125);
		text-align: right;
	}
	
		& .top
		{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
		}
	
		& .bottom
		{
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
		}

		& .icons
		{
			font-size: 0.8em;
			margin: 0 0 1em 0;
			text-align: center;
		}
		
			& .icons a
			{
				color: #41484c;
				-moz-transition: color 0.35s ease-in-out;
				-webkit-transition: color 0.35s ease-in-out;
				-o-transition: color 0.35s ease-in-out;
				-ms-transition: color 0.35s ease-in-out;
				transition: color 0.35s ease-in-out;
			}
			
				& .icons a:hover
				{
					color: #fff;
				}

`
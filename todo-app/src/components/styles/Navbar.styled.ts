import styled from "styled-components";

export const NavbarStyled = styled.nav`
    &
	{
	}
	
		& ul
		{
		}
		
			& ul li
			{
			}
			
				& ul li a
				{
					font-size: 0.8em;
					padding-top: 0.5em;
					padding-bottom: 0.5em;
				}
				
					& ul li a span
					{
						padding-right: 2.25em;
					}
					
						& ul li a span:before
						{
							left: 100%;
							margin-left: -1.25em;
						}
`
export const Icon = styled.span`
	.icon
		{
			text-decoration: none;
		}
		
			.icon span
			{
				display: none;
			}

			.icon:before
			{
				font-family: FontAwesome;
				font-size: 1.25em;
				text-decoration: none;
				font-weight: normal;
				font-style: normal;
				-webkit-text-rendering: optimizeLegibility;
				-moz-text-rendering: optimizeLegibility;
				-ms-text-rendering: optimizeLegibility;
				-o-text-rendering: optimizeLegibility;
				text-rendering: optimizeLegibility;
				-webkit-font-smoothing: antialiased;
				-moz-font-smoothing: antialiased;
				-ms-font-smoothing: antialiased;
				-o-font-smoothing: antialiased;
				/* font-smoothing: antialiased; */
			}
`
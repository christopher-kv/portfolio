import styled from "styled-components";

export const NavbarStyled = styled.nav`
	&  a
	{
		width:100%;
		display:flex;
	}
	& a span
	{
		width:100%;
	}
			
			& svg
			{	
				display:inline-flex;
				width:2em;
				height:38px;
				cursor: default;
				font-size: 1.8em;
				flex-basis: 1.225rem;
			}
			
				& ul li a 
				{
					display:inline-flex;
					padding: 0.5em 1.5em 0.5em 1.5em;
					color: rgba(255,255,255,0.5);
					text-decoration: none;
					outline: 0;
					border: 0;
					-moz-transition: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
					-webkit-transition: none;
					-o-transition: none;
					-ms-transition: none;
					transition: none;
				}
				
					/* & ul li a span
					{
						padding-top:0.25rem;
						cursor:default;
						min-height:1rem;
						position: relative;
						display: block;
						font-size: 1.4rem;
					} */
					&  ul li a span{
						display:block;
						position: relative;
						text-align:right;
						left: 0;
						color: #41484c;
						text-align: right;
						/* width: 1.25em; */
						font-family: FontAwesome;
						font-size: 0.8em;
						text-decoration: none;
						font-weight: normal;
						font-style: normal;
					}
					
						& ul li a span:before
						{
							position: absolute;
							left: 0;
							color: #41484c;
							text-align: center;
							width: 1.25em;
						}

					& ul li a.active
					{
						background: rgba(0,0,0,0.15);
						box-shadow: inset 0 0 0.25em 0 rgba(0,0,0,0.125);
						color: white;
					}

						& ul li a.active span
						{
						}


								& a:checked {
									/* color: #E27689; */
									color: #E27689;
									border-bottom-color: rgba(255,255,255,0);
								}
									& a:active
									{
										color: white;
									}
								& a:hover, :focus {
									background-color: #1C2022;
									opacity:0.7;
								}
									& ul li:active{
									color: white;
									border-bottom-color: rgba(255,255,255,0);
								}
		@media screen and (max-width: 600px) {
			display:none;
    }

`
export const Icon = styled.span`
	.icon
		{
			text-decoration: none;
		}
		
			& span
			{
				display: none;
			}

			&:before
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
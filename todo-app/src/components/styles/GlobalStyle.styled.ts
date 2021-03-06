import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	#root
	{
		width:100%;
		height:100%;
		margin:0px;
	}
	
	html, body{
		width:100%;
		height:100%;
		margin:0px;
		/* background: #292c35; */
		/* background: #393D4A; */
		/* background: #3E4149; */
		background: #575D70;
	}
	body,input,textarea,select
	{
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 19pt;
		font-weight: 300;
		line-height: 1.75em;
		color: #888;
		-webkit-text-stroke: 0.15px;
	}

	h1,h2,h3,h4,h5,h6
	{
		font-weight: 200;
		color: #666;
		line-height: 1.5em;
	}
	
		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a
		{
			color: inherit;
			text-decoration: none;
		}

		h1 strong, h2 strong, h3 strong, h4 strong, h5 strong, h6 strong
		{
			font-weight: 300;
		}
		
		h2
		{
			font-size: 2em;
			letter-spacing: -1px;
		}
		
			h2.alt
			{
				color: #888;
			}
			
			h2.alt strong
			{
				color: #666;
			}

		h3
		{
			font-size: 1.5em;
		}

	header
	{
		margin: 0 0 2em 0;
	}

	footer
	{
		margin: 2em 0 0 0;
	}

	strong, b
	{
		font-weight: 300;
		color: #666;
	}
	
	em, i
	{
		font-style: italic;
	}

	a
	{
		text-decoration: none;
		color: inherit;
		border-bottom: dotted 1px rgba(128,128,128,0.5);
		-moz-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		-webkit-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		-o-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		-ms-transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
		outline: 0;
	}

		a:hover
		{
			color: #E27689;
			border-bottom-color: rgba(255,255,255,0);
		}

	sub
	{
		position: relative;
		top: 0.5em;
		font-size: 0.8em;
	}
	
	sup
	{
		position: relative;
		top: -0.5em;
		font-size: 0.8em;
	}
	
	hr
	{
		border: 0;
		border-top: solid 1px #ddd;
	}
	
	blockquote
	{
		border-left: solid 0.5em #ddd;
		padding: 1em 0 1em 2em;
		font-style: italic;
	}
	
	p, ul, ol, dl, table
	{
		margin-bottom: 2em;
	}

	br.clear
	{
		clear: both;
	}
	*, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
	}
	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
}
	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
	}
`

export default GlobalStyle;
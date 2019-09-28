import { createGlobalStyle } from 'styled-components';

// Styled Components
// https://blog.getty.io/developing-apps-with-styled-components-e9f56cd0f4c5
// https://github.com/styled-components/styled-components/issues/2510
// BS
// https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap.css

const GlobalStyle = createGlobalStyle`

/* Creating a Global Styles with Utils and Rebot so that all (even Gutenberg) HTML (created by the app or not) can pick up the styling. */

/*!
 * Bootstrap Reboot v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
 */*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}


.wp-block-columns{display:flex;flex-wrap:wrap}@media (min-width:782px){.wp-block-columns{flex-wrap:nowrap}}.wp-block-column{flex-grow:1;margin-bottom:1em;flex-basis:100%;min-width:0;word-break:break-word;overflow-wrap:break-word}@media (min-width:600px){.wp-block-column{flex-basis:calc(50% - 16px);flex-grow:0}.wp-block-column:nth-child(2n){margin-left:32px}}@media (min-width:782px){.wp-block-column:not(:first-child){margin-left:32px}}

img{
  max-width: 100%;
}

/*

Bootstrap Grid in CSS Grid

*/

/* CONTAINER */
.container,
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* ROW */
.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
}

.row-no-gap{
  grid-gap: 0!important;
}

.col-xs-12 {
  grid-column: span 12
}

.col-xs-11 {
  grid-column: span 11;
}

.col-xs-10 {
  grid-column: span 10
}

.col-xs-9 {
  grid-column: span 9
}

.col-xs-8 {
  grid-column: span 8
}

.col-xs-7 {
  grid-column: span 7
}

.col-xs-6 {
  grid-column: span 6
}

.col-xs-5 {
  grid-column: span 5
}

.col-xs-4 {
  grid-column: span 4
}

.col-xs-3 {
  grid-column: span 3
}

.col-xs-2 {
  grid-column: span 2
}

.col-xs-1 {
  grid-column: span 1
}

@media (min-width: 768px) {
  .col-sm-12 {
    grid-column: span 12
  }

  .col-sm-11 {
    grid-column: span 11;
  }

  .col-sm-10 {
    grid-column: span 10
  }

  .col-sm-9 {
    grid-column: span 9
  }

  .col-sm-8 {
    grid-column: span 8
  }

  .col-sm-7 {
    grid-column: span 7
  }

  .col-sm-6 {
    grid-column: span 6
  }

  .col-sm-5 {
    grid-column: span 5
  }

  .col-sm-4 {
    grid-column: span 4
  }

  .col-sm-3 {
    grid-column: span 3
  }

  .col-sm-2 {
    grid-column: span 2
  }

  .col-sm-1 {
    grid-column: span 1
  }
}

@media (min-width: 992px) {
  .col-md-12 {
    grid-column: span 12
  }

  .col-md-11 {
    grid-column: span 11;
  }

  .col-md-10 {
    grid-column: span 10
  }

  .col-md-9 {
    grid-column: span 9
  }

  .col-md-8 {
    grid-column: span 8
  }

  .col-md-7 {
    grid-column: span 7
  }

  .col-md-6 {
    grid-column: span 6
  }

  .col-md-5 {
    grid-column: span 5
  }

  .col-md-4 {
    grid-column: span 4
  }

  .col-md-3 {
    grid-column: span 3
  }

  .col-md-2 {
    grid-column: span 2
  }

  .col-md-1 {
    grid-column: span 1
  }
}

@media (min-width: 1200px) {
  .col-lg-12 {
    grid-column: span 12
  }

  .col-lg-11 {
    grid-column: span 11;
  }

  .col-lg-10 {
    grid-column: span 10
  }

  .col-lg-9 {
    grid-column: span 9
  }

  .col-lg-8 {
    grid-column: span 8
  }

  .col-lg-7 {
    grid-column: span 7
  }

  .col-lg-6 {
    grid-column: span 6
  }

  .col-lg-5 {
    grid-column: span 5
  }

  .col-lg-4 {
    grid-column: span 4
  }

  .col-lg-3 {
    grid-column: span 3
  }

  .col-lg-2 {
    grid-column: span 2
  }

  .col-lg-1 {
    grid-column: span 1
  }
}

/* 

Base Classes

*/

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.d-flex {
  display: flex;
}

.justify-content-end {
  justify-content: flex-end;
}

.align-items-center {
  -ms-flex-align: center!important;
  align-items: center!important;
}

.list-unstyled {
  list-style: none;
}

.m-0 {
  margin: 0;
}

.p-0 {
  padding: 0;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.system-output{
  min-height: 50vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
  font-size: 1.2rem;
}

.slanp-up-right{
  clip-path: polygon(0 32%, 100% 0, 100% 100%, 0 100%);
  margin-top: -127px;
}

form{
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
}

.form-group{
  margin-bottom: 12px;
}

.form-control{
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn{
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.4rem 3rem;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: 1.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.btn-primary {
  ${props =>
    props.theme.primaryColor
      ? `border-color: ${props.theme.primaryColor}
          color: ${props.theme.primaryColor}`
      : ``};
}
.btn-primary:hover {
  color: #fff;
  ${props =>
    props.theme.primaryColor
      ? `background-color: ${props.theme.primaryColor}`
      : ``};
}

body{
  ${props =>
    props.theme.secondaryFont
      ? `font-family: ${props.theme.secondaryFont}`
      : `arial`};
  ${props =>
    props.theme.bodyColor ? `background-color: ${props.theme.bodyColor}` : ``};
  color: #666;
}

a, a:hover, a:focus, a:active {
  ${props =>
    props.theme.primaryColor ? `color: ${props.theme.primaryColor}` : ``};
}

/* Pages */

.page-slug-contact{
  text-align: center;
}

`;

export default GlobalStyle;

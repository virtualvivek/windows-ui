<p align="center"> 
  <img src="markdown/logo.png" width="250" />
</p>

<p align="center">Build Windows Fluent UI apps using <b>Html</b>, <b>CSS</b> & <b>JavaScript</b>.</p>

<meta name='keywords' content='Windows10, FluentUI, html, css, js'>
<meta name='description' content='Build Windows Fluent UI apps or electron apps using html,css & js'>
<meta name='author' content='Vivek Verma'>

<p align="center">
  
  <a href="https://github.com/virtualvivek/windows-ui-web/tree/main/dist/windows-ui-web.min.css">
    <img src="https://img.shields.io/github/size/virtualvivek/windows-ui-web/dist/windows-ui-web.min.css?style=flat-square&logo=css3&color=1572B6&label=windows-ui-web.min.css" alt="windows-ui-web.min.css" />
  </a>
  
  <a href="https://github.com/virtualvivek/windows-ui-web/tree/main/dist/windows-ui-web.min.js">
    <img src="https://img.shields.io/github/size/virtualvivek/windows-ui-web/dist/windows-ui-web.min.js?style=flat-square&logo=JavaScript&color=F7DF1E&label=windows-ui-web.min.js" alt="windows-ui-web.min.js" />
  </a>
   
</p>


<p align="center"><img src="markdown/preview.jpg" width="480" /></p>

# 🚧 Work in progress

# Demo & Docs
https://windows-ui.github.io/


<h1>Getting Started</h1>

Start a new project with the [boilerplate](https://github.com/virtualvivek/windows-ui-web/tree/master/boilerplate).

# Imports
When you need to include project's compiled `CSS` or `JS` files,
you can either use a local copies or use [jsDelivr](https://www.jsdelivr.com/).

```html
<!-- CSS minified -->
<link
  href="https://cdn.jsdelivr.net/npm/windows-ui-web@4.0.0/dist/config/app-config.css.css"
  rel="stylesheet"
  crossorigin="anonymous">
<link
  href="https://cdn.jsdelivr.net/npm/windows-ui-web@4.0.0/dist/windows-ui-web.min.css"
  rel="stylesheet"
  crossorigin="anonymous">
<link
  href="https://cdn.jsdelivr.net/npm/windows-ui-web@4.0.0/dist/icons/fonts/fonts.min.css"
  rel="stylesheet"
  crossorigin="anonymous">
```
```html
<!-- JavaScript minified -->
<script
  src="https://cdn.jsdelivr.net/npm/windows-ui-web@4.0.0/dist/windows-ui-web.bundle.min.js"
  crossorigin="anonymous">
</script>
```

# Configuration

**app-config.css** file contains the **`PrimaryColor`**, **`Fontfamily`** used by the app.<br/>
Make sure to add this file before **windows-ui-web.min.css**.<br/><br/>
By `default` project uses <a href="dist/config/app-config.css">app-config.css</a>.<br>

Customize by `creating` your own **app-config.css** file with any PrimaryColor/Fontfamily like this below:

  
```css
:root {
  --PrimaryColor: #0078D7; /* Change of your choice */
  --PrimaryColorLight: #47aeff;  /* Lighter version of --PrimaryColor for DarkMode */
}
body {
  font-family: "Segoe UI";
}
::selection {
  color: #ffffff;
  background-color: var(--PrimaryColor);
}
```


# Find this project useful? :heart:
Support it by joining [**stargazers**](https://github.com/virtualvivek/windows-ui-web/stargazers) for this repository. :star:

# Branches

[windows-ui-web](https://github.com/virtualvivek/windows-ui-web)  ‣ Current. <br/>
[Windows10-framework](https://github.com/virtualvivek/windows-ui-web/tree/Windows10-framework) Legacy.

# License

`Windows10-framework` is licensed under `MIT license`. View [license](https://github.com/virtualvivek/windows-ui-web/blob/master/LICENSE).<br>
Copyright (c) 2020-21 [**Vivek Verma**](https://github.com/virtualvivek)

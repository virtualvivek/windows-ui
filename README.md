<p align="center"> 
  <img src="src/assets/logo.png" width="224" />
</p>
<h1 align="center">windows-ui</h1>

<p align="center">Build Windows Fluent UI apps using <b>Html</b>, <b>CSS</b> & <b>JavaScript</b>.</p>
<p align="center"><a href="https://windows-ui.github.io/" target="_blank">Explore Project Docs »</a></p>

<meta name='keywords' content='Windows 10,Windows 11, FluentUI, html, css, js'>
<meta name='description' content='Build Windows Fluent UI apps using html, css & js'>
<meta name='author' content='Vivek Verma'>

<p align="center"><img src="src/assets/preview_header_dark.png" width="500" /></p>


# 🚧 Work in progress.

# Status
<a href="https://github.com/virtualvivek/windows-ui/tree/main/dist/windows-ui-11.min.css">
  <img src="https://img.shields.io/github/size/virtualvivek/windows-ui/dist/windows-ui.min.css?style=flat&logo=css3&color=1572B6&label=windows-ui.min.css" alt="windows-ui.min.css" />
</a>
<a href="https://github.com/virtualvivek/windows-ui/tree/main/dist/windows-ui.min.js">
  <img src="https://img.shields.io/github/size/virtualvivek/windows-ui/dist/windows-ui.min.js?style=flat&logo=JavaScript&color=F7DF1E&label=windows-ui.min.js" alt="windows-ui.min.js" />
</a>
<a href="https://github.com/windows-ui/icons/tree/main/dist/" target="_blank">
  <img src="https://img.shields.io/github/size/windows-ui/icons/dist/winui-icons.min.css?style=flat&color=EF2D5E&logo=MaterialDesignIcons&logoColor=ffffff&label=winui-icons.min.css" />
</a>
<a href="https://github.com/windows-ui/icons/tree/main/dist/" target="_blank">
  <img src="https://img.shields.io/github/size/windows-ui/icons/dist/winui-icons.slim.css?style=flat&color=00A98F&logo=FontAwesome&logoColor=ffffff&label=winui-icons.slim.css" />
</a>
<a href="https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/Icons-Docs-darklime.svg?style=flat&color=0078F0&logo=Snowpack" alt="Icons" />
</a>
<a href="https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/Colors-Docs-darklime.svg?style=flat&color=512BD4&logo=LaravelHorizon&logoColor=ffffff" alt="Colors" />
</a>
<a href="https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/Boilerplate-Template-darklime.svg?style=flat&color=006C66&logo=HeadlessUI&logoColor=ffffff" alt="Colors" />
</a>



<h1>Getting Started</h1>

Start a new project with the [boilerplate](https://github.com/virtualvivek/windows-ui/tree/master/boilerplate).

# Imports
When you need to include project's compiled `CSS` or `JS` files,
you can either use a local copies or use [jsDelivr](https://www.jsdelivr.com/).

```html
<!-- CSS minified -->
<link href="https://cdn.jsdelivr.net/npm/windows-ui@4.0.0/dist/config/app-config.css.css" rel="stylesheet" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/npm/windows-ui@4.0.0/dist/windows-ui-11.min.css" rel="stylesheet" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/npm/windows-ui@4.0.0/dist/icons/fonts/fonts.min.css" rel="stylesheet" crossorigin="anonymous">
```
```html
<!-- JavaScript minified -->
<script
  src="https://cdn.jsdelivr.net/npm/windows-ui@4.0.0/dist/windows-ui.bundle.min.js"
  crossorigin="anonymous">
</script>
```

# Configuration

**app-config.css** file contains the **`PrimaryColor`**, **`Fontfamily`** used by the app.<br/>
Make sure to add this file before **windows-ui.min.css**.<br/><br/>
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
Support it by joining [**stargazers**](https://github.com/virtualvivek/windows-ui/stargazers) for this repository. :star:

# Branches

<table>
  <tr align="left">
    <th><a href="https://github.com/virtualvivek/windows-ui">windows-ui<a/></th>
    <th>‣ Current</th>
  </tr>
  <tr>
    <th><a href="https://github.com/virtualvivek/windows-ui/tree/Windows10-framework">Windows10-framework<a/></th>
    <th>Legacy</th>
  </tr>
</table>


# License

`Windows-ui` is licensed under [MIT License](https://github.com/virtualvivek/windows-ui/blob/master/LICENSE) ‣ 
Copyright (c) [**virtualvivek**](https://github.com/virtualvivek).

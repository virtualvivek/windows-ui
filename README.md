<p align="center"> 
  <img src="docs/public/static/logo.png" width="250" />
</p>

<p align="center">Build Windows Fluent UI apps using <b>Html</b>, <b>CSS</b> & <b>JavaScript</b>.</p>

<meta name='keywords' content='Windows10, FluentUI, html, css, js'>
<meta name='description' content='Build Windows Fluent UI apps or electron apps using html,css & js'>
<meta name='author' content='Vivek Verma'>

<p align="center">
	
  <a href="https://github.com/virtualvivek/windows-ui-web/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-darklime.svg?style=flat-square&color=%2300C7B7"
      alt="License: MIT" />
  </a>

  <a href="https://github.com/virtualvivek/windows-ui-web/releases/latest">
    <img src="https://img.shields.io/github/v/release/virtualvivek/windows-ui-web?label=Release&style=flat-square&color=%234BB749"
      alt="version" />
  </a>
  
  <br/>
  
  <a href="https://github.com/virtualvivek/windows-ui-web/tree/main/dist/windows-ui-web.min.css">
    <img src="https://img.shields.io/github/size/virtualvivek/windows-ui-web/dist/windows-ui-web.min.css?style=flat-square&logo=css3&color=1572B6&label=windows-ui-web.min.css" alt="windows-ui-web.min.css" />
  </a>
  
  <a href="https://github.com/virtualvivek/windows-ui-web/tree/main/dist/windows-ui-web.min.js">
    <img src="https://img.shields.io/github/size/virtualvivek/windows-ui-web/dist/windows-ui-web.min.js?style=flat-square&logo=JavaScript&color=F7DF1E&label=windows-ui-web.min.js" alt="windows-ui-web.min.js" />
  </a>
   
</p>


<p align="center"><img src="docs/public/static/preview.jpg" width="480" /></p>
	
# Demo ⚡
https://windows10framework.netlify.app/



<h1>Getting Started</h1>

### Code container template
<h3>View <a href="templates/screen-main.html">App Boilerplate</a></h3> 

```htm

./src
 └ core
   ├─ config/
   │  ├─ css/
   │  ├─ └─ appConfig.css
   │  ├─ drawable/
   │  ├─ └─ ic_launcher.png
   │  └─ appConfig.js
   ├─ css/
   │  └─ windows10framework.css
   └─ js/
      ├─ windows10framework.js
      ├─ windows10framework.api.js
      └─ windows10framework.notifications.js
```



## Configure App Preferences
‣ Customize app `preferences` including `drop shadows`,`dark mode` etc.. using `appConfig.js` file <br>
<b>./src/core/config/<a href="src/core/config/appConfig.js">appConfig.js </a></b>


```js
let BlurEnabled = true;  	//'true' get drop shadows for components
let ShowDarkModeSwitch = true;  //'true' get display a switch for dark/light mode
let NightMode = false;  	//'true' get dark mode when app mounted
let FollowSystemTheme = true;  	//'true' follow theme dark, light using system 
```

## Configure App Color, Font Family or ScrollBars
‣ `appConfig.css` file contains the app `PrimaryColor`, `Fontfamily` used by the app <br>
<b>./src/core/config/css/<a href="src/core/config/css/appConfig.css">appConfig.css</a></b>


```css
:root {
    --PrimaryColor: #6632a8;  /* Change color you like */ 
}
body {
    font-family: "Segoe UI";  /* Change fontfamily you like */
}
```


# Find this framework useful? :heart:
Support it by joining [**stargazers**](https://github.com/virtualvivek/Windows10-framework/stargazers) for this repository. :star:

# License

`Windows10-framework` is licensed under `MIT license`. View [license](https://github.com/virtualvivek/Windows10-framework/blob/master/LICENSE).<br>
Copyright (c) 2020-21 [**Vivek Verma**](https://github.com/virtualvivek)

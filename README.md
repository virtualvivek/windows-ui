<h2 align="center"> 
  <img src="kitchen-sink/_md_preview/app_preview_readme_title_flat__.png" width="440" /> 
</h2>


<meta name='keywords' content='Windows10,MetroUI,framework,html,css,js'>
<meta name='description' content='Build Windows 10 look and feel web apps or electron apps using html,css & js'>
<meta name='author' content='Vivek Verma'>
  
  
<p align="center">

  <img alt="Netlify" src="https://img.shields.io/netlify/4a7e4c36-524a-4cd6-b1bf-e535ec5c7d07?label=build&logo=github&style=flat-square">
	
  <a href="https://github.com/virtualvivek/Windows10&#95;framework/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-darklime.svg?style=flat-square&color=blue"
      alt="License: MIT" />
  </a>
  

  <a href="https://github.com/virtualvivek/Windows10&#95;framework">
    <img src="https://img.shields.io/badge/Release-v2.0-green.svg?style=flat-square&color=darklime"
      alt="Release" />
  </a>
  
</p>



<h2 align="center">Build Windows Apps with Convinience</h2>

<h3 align="center"><a href="https://windows10framework.github.io/">windows10framework.github.io</a></h3>

<p align="center">
	Build your Windows apps with just web skills using <b>HTML</b>, <b>CSS</b> and <b>JavaScript</b>, Develop apps for Windows Platform compatible using ElectronJs framework and publish it on Windows App Store on the go!. <br>	
</p>



<p align="center"><code><b>Note :</b> Please enable <b>Desktop Mode</b> if using Demo in mobile phones for best experience.</code><p>
	

<h2 align="center">
  <a href="https://windows10framework.github.io"><img src="kitchen-sink/_md_preview/app_preview_button_watch_demo.png" width="300" /></a>

  <img src="kitchen-sink/_md_preview/app_preview_button_store.png" width="300" />

  <img src="kitchen-sink/_md_preview/app_preview_button_electron.png" width="300" />
</h2>



## Stunning Set Of UI Elements

<h1 align="center"><img src="kitchen-sink/_md_preview/app_framework_preview.png" width="850" /></h1>
<p align="center">
Provides you with the rich UI Components that to completely matches the latest Windows environment that accelerates your productivity to build your hybrid windows app.
</p>
<br>

# Documentation

  * [Form Elements](src/core/docs/forms/README.md)
  * [Progress Controls](src/core/docs/forms/README.md)
  * [Icons](src/core/docs/forms/README.md)
  * [Bottom Sheet](src/core/docs/forms/README.md)
  * [Alerts](src/core/docs/forms/README.md)
  * [Notifications](src/core/docs/forms/README.md)
  
<br>

<p align="center">
	<a href="src/core/docs/forms/README.md"><img src="src/core/docs/root_md_preview/docs_forms.png" width="400" /></a>
	<img src="src/core/docs/root_md_preview/docs_progress_controls.png" width="400" />
	<img src="src/core/docs/root_md_preview/docs_icons.png" width="400" />
	<img src="src/core/docs/root_md_preview/docs_bottomsheet.png" width="400" />
	<img src="src/core/docs/root_md_preview/docs_alerts.png" width="400" />
	<img src="src/core/docs/root_md_preview/docs_notifications.png" width="400" />
</p>

<br>
<h1>Getting Started</h1>

### Code container template
<h3>View <a href="templates/screen-main.html">Complete App template</a></h3> 

```htm

<body>

    <div class="app-container"> 
        
       <!-- Side Navigation -->
	   <div id="app-nav-wrap">           
         <nav animate>       
            <!-- App Name--> 
            <div><!-- <a href="#" app-back></a> --><span id="app-name">App Name</span></div>
            <ul>
                <a href="#" id="app-nav-toggle"></a>
                <li><a href="#app-section-1" class="icons10-circle"><span>Tab 1</span></a></li>
                <li><a href="#app-section-2" class="icons10-circle"><span>Tab 2</span></a></li>
                <li><a href="#app-section-3" class="icons10-circle"><span>Tab 3</span></a></li>
                <li><a href="#app-section-4" class="icons10-circle"><span>Tab 4</span></a></li>
            </ul>
         </nav>
       </div>	
    
    <div class="app-content-wrap">
      
        
    <!-- Section 1 -->
     <section id="app-section-1">
     
	<div class="app-section-container">
	
	  <h3 class="fixed">Tab 1</h3>
           <!-- Contents -->
         </div>
          
     </section>
  
    .......2 .....3 .........
    
    <!-- Section 4 -->
     <section id="app-section-4">
     
	<div class="app-section-container">
	
	  <h3>Tab 4</h3>
           <!-- Contents -->
         </div>
          
     </section>
    
					
        </div><!-- /app-content-wrap(App Tab Host Wrapper) -->
				
    </div><!-- /app-container(Tabs Content Including Navigation) -->	

</body>

```
<br>



### Configure App Color
Customize `entire app color` including all components using `accentColor.css` file
#### ./src /core /app-config /css /accentColor.css
<a href="src/core/app-config/css/accentColor.css">View accentColor.css</a>

```css
	:root {
	    --AppColor: #2D7D9A;  /*Customize Entire App Color You Like*/
	}
```


<br>

### Configure App Font Family or ScrollBars
You can customize entire app `font family`, `font-weight` or `scrollbars` using `appConfig.css` file
#### ./src /core /app-config /css /appConfig.css
<a href="src/core/app-config/css/appConfig.css">View appConfig.css</a>

```css
	body {
	    font-weight: 400;
	    font-family: Segoe UI, sans-serif;  /*Customize with your own font family*/
	    .... }
	  
	*::-webkit-scrollbar,
	*::-webkit-scrollbar-thumb {
	  .... }
```


<br>

## License

	MIT License

	Copyright (c) 2020 Vivek Verma

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

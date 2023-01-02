const LoaderBusy  ='<div class="app-ldr-busy ball-1"><div class="ldr-busy-ball"></div></div>'
                  +'<div class="app-ldr-busy ball-2"><div class="ldr-busy-ball"></div></div>'
                  +'<div class="app-ldr-busy ball-3"><div class="ldr-busy-ball"></div></div>'
                  +'<div class="app-ldr-busy ball-4"><div class="ldr-busy-ball"></div></div>'
                  +'<div class="app-ldr-busy ball-5"><div class="ldr-busy-ball"></div></div>';

const LoaderBusys = document.querySelectorAll(".app-loader-busy");
for (const Loaderbusy of LoaderBusys) { Loaderbusy.innerHTML = LoaderBusy; };


const LoaderBar ='<div class="app-ldr-bar first"></div>'
                +'<div class="app-ldr-bar second"></div>'
                +'<div class="app-ldr-bar third"></div>'
                +'<div class="app-ldr-bar fourth"></div>';

const LoaderBars = document.querySelectorAll(".app-loader-bar");
for (const loaderbars of LoaderBars) { loaderbars.innerHTML = LoaderBar; };
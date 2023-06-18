const LoaderBusy  ='<svg viewBox="0 0 16 16"><circle class="app-ldr-busy" cx="8px" cy="8px" r="7px"></circle></svg>';

const LoaderBusys = document.querySelectorAll(".app-loader-busy");
for (const Loaderbusy of LoaderBusys) { Loaderbusy.innerHTML = LoaderBusy; };


const LoaderBar ='<div class="app-ldr-bar ball-1"></div>'
                +'<div class="app-ldr-bar ball-2"></div>'
                +'<div class="app-ldr-bar ball-3"></div>'
                +'<div class="app-ldr-bar ball-4"></div>';

const LoaderBars = document.querySelectorAll(".app-loader-bar");
for (const loaderbars of LoaderBars) { loaderbars.innerHTML = LoaderBar; };
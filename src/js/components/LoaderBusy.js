const LoaderProgress = document.querySelectorAll('Loader [data-win-progress]');

for (const LdrPrgs of LoaderProgress) {
  window.addEventListener("load", function () {
    const getLdrPrgs = LdrPrgs.getAttribute("data-win-progress");
    const LdrPrgsSvg = LdrPrgs.getElementsByTagName("circle")[0];
    LdrPrgsSvg ? LdrPrgsSvg.style.strokeDasharray = `${(getLdrPrgs/2.4)}px, 43.97px` : "";

    LdrPrgs.addEventListener("contentchange", function() {
      console.log("Captured content change event"); 
    });
  });
 };
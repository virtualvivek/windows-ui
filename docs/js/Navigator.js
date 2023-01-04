document.write(`
<div id="app-navbar-wrap-id" class="app-navbar-wrap">
  <div class="app-navbar-topbar-mobile">
  <span class="app-navbar-toggle-button"></span>
  <div style="display: flex; justify-content: space-between; width: calc(100% - 60px);">
    <span class="app-navbar-name">Windows UI</span>
    <span class="app-navbar-name">Home</span>
  </div>
  </div>
  <nav class="animate">
  <div class="app-navbar-header">
    <span class="app-navbar-toggle-button"></span>
    <span class="app-navbar-name">Windows UI</span>
  </div>
  <ul class="app-navbar-list" id="app-navbar-list">
    <!-- <div class="app-nav-search" title="Search Docs">
    <div class="app-input-search-box">
        <input class="app-input-text" type="search" placeholder="Search Docs v4.0.x" value="">
    </div>
    <div class="app-search-dialog-trigger">
        <i class="icons10-search"></i>
    </div>
    <div class="app-search-dialog">
        <input class="app-input-text" type="search" placeholder="Search Docs v4.0.x" value="">
        <button class="font-size-16px"><i class="icons10-cross"></i></button>
    </div>
    </div> -->
    <label class="app-navbar-theme-switch">
    <input id="app-navbar-theme-switch" type="checkbox" checked>
    <div class="app-navbar-theme-switch-view"></div>
    <span id="app-navbar-theme-switch-text">Day Mode</span>
    </label>
  </ul>
  </nav>
  <div class="app-navbar-overlay"></div>
</div>
`);
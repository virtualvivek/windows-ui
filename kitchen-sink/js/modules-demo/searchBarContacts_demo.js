console.log("hellow worls");
// quick search regex
var qsRegex;
var filterValue;
// init Isotope
var $grid = $(".grid").isotope({
  itemSelector: ".element-item",
  layoutMode: "fitRows",
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
    var selectResult = filterValue ? $this.is(filterValue) : true;
    return searchResult  && selectResult;
  }
});

// bind filter on select change
$("#filters-2").on("change", function() {
  // get filter value from option value
  filterValue = $(this).val();
  console.log(filterValue);
  $grid.isotope();
});

console.log("hellow worls");


// use value of search field to filter
var $quicksearch = $("#quicksearch").keyup(
  debounce(function() {
    qsRegex = new RegExp($quicksearch.val(), "gi");
    $grid.isotope();
  })
);
// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
  var timeout;
  return function debounced() {
    if (timeout) {
      clearTimeout(timeout);
    }
    function delayed() {
      fn();
      timeout = null;
    }
    setTimeout(delayed, threshold || 100);
  };
}

console.log("hellow worls");
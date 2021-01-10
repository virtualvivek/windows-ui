$('select.dropdown').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('app-select-hidden'); 
    $this.wrap('<div class="select-area"></div>');
    $this.after('<div class="app-select-styled"></div>');

    var $styledSelect = $this.next('div.app-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'app-select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.app-select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.app-select-options').hide();
        });
        $(this).toggleClass('active').next('ul.app-select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
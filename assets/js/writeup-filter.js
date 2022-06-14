$('input[type="checkbox"]').click(function() {
    
    if ($('input[type="checkbox"]:checked').length > 0) {
        $('.categories').prepend($('.categories > div[class=' + this.id + ']'));
        $('.categories > div').hide();
        $('input[type="checkbox"]:checked').each(function() {
            $('.categories >div.' + this.id ).fadeIn("medium");
        });
    } else {
        var array  = [ 'misc',  'web', ] ;
         $.each(array,function(index,value){
           $('.categories').append($('.'+value));    // add . here
          });
          $('.categories > div').hide();
        // $('.categories > div').fadeIn("medium");
    }
});
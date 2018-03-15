jQuery(document).ready(function($) {
    $('.toggler').on('click',function(){
        $(this).parent().children().toggle();  //swaps the display:none between the two spans
        $(this).parent().parent().find('.showpanel').slideToggle();  //swap the display of the main content with slide action
    });

});

    $('#more').click(function(e) {
    e.stopPropagation();
    $('div').css({
        'height': 'auto'
    })
});

$(document).click(function() {
    $('div').css({
        'height': '50px'
    })
})

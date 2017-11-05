// $(document).ready(function() {
//     $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
//     $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
// });


//  onclick function for list button
$('button').on('click',function(e) {
    if ($(this).hasClass('grid')) {
        $('#container ul').removeClass('list').addClass('grid');
    }
    else if($(this).hasClass('list')) {
        $('#container ul').removeClass('grid').addClass('list');
    }
});
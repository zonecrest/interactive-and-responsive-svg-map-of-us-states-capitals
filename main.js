$("path").hover(function(e) {
  $('#info-card').css('display','block');
  $('#info-card').html($(this).data('info'));

    var name = $(this).attr('id');
    var mainText = $(this).attr('mainText');

    // Display layer info
    document.querySelector('#layerName').innerText = name ;
    document.querySelector('#mainText').innerText = mainText;

});

$("path").mouseleave(function(e) {
  $('#info-card').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-card').css('top',e.pageY-$('#info-card').height()+30);
  $('#info-card').css('left',e.pageX-($('#info-card').width())/4);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

$("path").hover(function(e) {
  $('#info-card').css('display','block');
  $('#info-card').html($(this).data('info'));

    var name = $(this).id.valueOf();// .id;// 'one';//e.features[0].properties.name;
    var iataCode = 'two'; //e.features[0].properties.iataCode;

    // Display airport info
    document.querySelector('#airport-name').innerText = name + " (" + iataCode + ")";


});

$("path").mouseleave(function(e) {
  $('#info-card').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-card').css('top',e.pageY-$('#info-card').height()-30);
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

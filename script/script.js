
$('.scroll').on('click', function (event) {
  var hash = this.hash;
  $('html, body').animate({scrollTop: $(hash).offset().top - 50}, 1500, 'swing');
  return false;
});

$('.portfolio a').hover(function(){
  var name = this.children[1].innerHTML;
  $(this).append('<div class="wrapper"><p>'+name+'</p></div>');
}, function(){
  $('div').remove('.wrapper');
});

$(function(){
  $('.menu a[data-link]').on('click', function(e){
    const elementLink = $(this).attr('data-link');
    if(elementLink){
      e.preventDefault();
      const top = $(elementLink).offset().top - 70;
      $('html, body').animate({scrollTop: top}, 500);
    }
  });
});

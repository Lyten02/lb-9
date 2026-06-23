$(function(){
  const slides = ['img/photo1.svg','img/photo2.svg','img/photo3.svg','img/photo4.svg'];
  let page = 0;
  let isBusy = false;
  $('.slide-shadow').on('click', function(){
    if(isBusy) return;
    page += $(this).hasClass('slide-next') ? 1 : -1;
    if(page >= slides.length) page = 0;
    if(page < 0) page = slides.length - 1;
    isBusy = true;
    $('.simple-slider img').animate({opacity:0}, 220, function(){
      $(this).attr('src', slides[page]).animate({opacity:1}, 220, function(){ isBusy = false; });
      $('.slider-label').text('Слайд ' + (page + 1) + ' из ' + slides.length);
    });
  });
});

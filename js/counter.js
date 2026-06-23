$(function(){
  $('.achieve-number').each(function(){
    const $this = $(this);
    const target = parseInt($this.data('target'),10);
    $({value:0}).animate({value:target},{duration:1500,easing:'swing',step:function(){ $this.text(Math.ceil(this.value)); },complete:function(){ $this.text(target); }});
  });
});

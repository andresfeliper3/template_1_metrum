
//Clicks on options
$('#stage1').click(function() 
{
    $('#carousel1').carousel(0);
});
$('#stage2').click(function() 
{
    $('#carousel1').carousel(1);
});
$('#stage3').click(function() 
{
    $('#carousel1').carousel(2);
});
$('#stage4').click(function() 
{
    $('#carousel1').carousel(3);
});

$(document).ready(function(){ //Hacia arriba
    irArriba();
    //Carousel options
    $('#carousel1').carousel({
    interval: 4000  
    })
});
  
  function irArriba(){
    $('.ir-arriba').click(function(){ 
        $('body,html').animate({ 
            scrollTop:'0px' },1000); 
        });
    $(window).scroll(function(){
      if($(this).scrollTop() > 0){ 
          $('.ir-arriba').slideDown(600); 
        }else{ 
            $('.ir-arriba').slideUp(600); 
        }
    });
    $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
  }


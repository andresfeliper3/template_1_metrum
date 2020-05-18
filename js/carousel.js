//Carousel options
$('#carousel1').carousel({
    interval: 4000  
  })

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

/*Div's sizes */


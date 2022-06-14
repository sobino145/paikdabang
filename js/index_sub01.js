$(document).ready(function(){
  
  //CEO이미지 구동////////////////////////////////////////
  
  $(".ceo_Img").hover(function(){
    $(this).find(".ceo_profile").stop().animate({marginTop:"-200px"},500);
  },function(){
    $(this).find(".ceo_profile").stop(true,true).animate({marginTop:"0px"},500);
  });

  
});
$(document).ready(function(){
  
  //메뉴 구동/////////////////////////////////////
  $(".gnbMenu").mouseenter(function(){
    $(this).find("li>.smenu").stop().slideDown();
    $(".bg_box").stop().slideDown("fast"); 
  });

  $("header").mouseleave(function(){
    $(this).find("li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp(); 
  });

  //푸터 사이트 맵//////////////////////////////////
  $("dl dt").click(function(){
    $(this).next().toggle();
  });

});
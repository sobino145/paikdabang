$(document).ready(function(){
  
//커피메뉴////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(".graphic_list>li").click(function(){
    
  g_pop=$(this).index();

  $(".g_page span:nth-child(1)").text(g_pop+1);//오른쪽 상단페이지 넘버
  $("html").css({overflowY:"hidden"});//기존html 스크롤 숨기기
  $(".pop>li").eq(g_pop).show();//g_pop index에 해당하는 팝업보이기
  $("#popup").stop(true,true).fadeIn();//검정배경

});



//오른쪽 상단 버튼 - 다음보기
$(".right_btn").click(function(){
  
  if (g_pop<30) {
    
    $(".pop>li").eq(g_pop).stop(true,true).fadeOut();//기존것 사라짐
    g_pop++;

    $(".g_page span:nth-child(1)").text(g_pop+1);
    $(".pop>li").eq(g_pop).stop(true,true).fadeIn();

  }

});


//오른쪽 상단버튼 - 이전보기
$(".left_btn").click(function(){
  
  if (g_pop>0) {
    
    $(".pop>li").eq(g_pop).stop(true,true).fadeOut();//기존것 사라짐
    g_pop--;

    $(".g_page span:nth-child(1)").text(g_pop+1);
    $(".pop>li").eq(g_pop).stop(true,true).fadeIn();

  }

});

//오른쪽 상단 버튼 - 닫기
$(".btn_close").click(function(){
  
  $("html").css({overflowY:"scroll"});
  $("#popup").stop(true,true).fadeOut();
  $(".pop>li").stop(true,true).hide();
  
});



});
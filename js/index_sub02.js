$(document).ready(function(){
  
  //신메뉴///////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////콘텐츠1//////////////////////////////////
  //각 목록을 클릭할 때...
  $(".menu1").click(function(){

    $(this).next().show();//다음 형제인 pop을 보이게 함
    $("html").css({overflowY:"hidden"});//스크롤바 없앰
    return false;
  });


  //close버튼과 검정색 배경 영역을 클릭할 때... 
  $(".close1, .pop1").click(function(){

    $(".pop1").hide();//pop을 안보이게 함
    $("html").css({"overflow-y":"scroll"});//스크롤바 재생성
    
  });

  /////////////////콘텐츠2//////////////////////////////////

  $(".menu2").click(function(){

    $(this).next().show();//다음 형제인 pop을 보이게 함
    $("html").css({overflowY:"hidden"});//스크롤바 없앰
    return false;
  });


  //close버튼과 검정색 배경 영역을 클릭할 때... 
  $(".close2, .pop2").click(function(){

    $(".pop2").hide();//pop을 안보이게 함
    $("html").css({"overflow-y":"scroll"});//스크롤바 재생성
    
//커피메뉴~~빽스치노////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(".graphic_list>li").click(function(){
    
  g_pop=$(this).index();

  $(".g_page span:nth-child(1)").text(g_pop+1);
  $("html").css({overflowY:"hidden"});
  $(".pop>li").eq(g_pop).show();
  $("#popup").stop(true,true).fadeIn();

});



//오른쪽 상단 버튼 - 다음보기
$(".right_btn").click(function(){
  
  if (g_pop<14) {
    
    $(".pop>li").eq(g_pop).stop(true,true).fadeOut();
    g_pop++;

    $(".g_page span:nth-child(1)").text(g_pop+1);
    $(".pop>li").eq(g_pop).stop(true,true).fadeIn();

  }

});


//오른쪽 상단버튼 - 이전보기
$(".left_btn").click(function(){
  
  if (g_pop>0) {
    
    $(".pop>li").eq(g_pop).stop(true,true).fadeOut();
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










});
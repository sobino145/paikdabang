$(document).ready(function(){
  //비주얼 적용////////////////////////////////////////
  
  let imgon_w= $(".slideon ul li").width();   
	let imgon_n= $(".slideon ul li").length;   
	let soldidxon=0;  
	let sindexon=0;  

	$(".slideon ul li:last").prependTo(".slideon ul");
	//갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치 1234->4123	
	$(".slideon ul").css({ left:-imgon_w}); 
	//처음에 1이 보이기위해 앞으로 가져온 4를 왼쪽으로 밀어두기


	function slideonImg(sindexon,m){  

		
		if(m==0){ 
			
			$(".slideon ul").stop(true,true).animate({
				left:"+="+imgon_w+"px"},600,"easeOutCubic",function(){
				$(".slideon ul li:last").prependTo(".slideon ul");				
				$(".slideon ul").css({ left:-imgon_w }); 
			});
			$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");  
			$(".slideon_btn ul li").eq(sindexon).addClass("activeon");  

		}else{ 

			$(".slideon ul").stop(true,true).animate({
				left:"-="+imgon_w+"px"},600,"easeOutCubic",function(){
				$(".slideon ul li:first").appendTo(".slideon ul");				
				$(".slideon ul").css({ left:-imgon_w });	
			});
			$(".slideon_btn ul li").eq(soldidxon).removeClass("activeon"); 
			$(".slideon_btn ul li").eq(sindexon).addClass("activeon");  

		}

		soldidxon=sindexon;

	} 

	function slideonAuto(){
		sindexon++;	
		if(sindexon==imgon_n){ 
			sindexon=0;
		}
		slideonImg(sindexon,1);
	}

	auto2=setInterval(slideonAuto,4000);


  //하단버튼 클릭
	$(".slideon_btn ul li").click(function(){

		clearInterval(auto2); 
		$(".playon").hide();
		$(".stopon").show();

		sindexon = $(this).index();

		//재배치
		for(let i=1; i <= imgon_n; i++){
			$(".slideon ul li.i"+i).appendTo(".slideon ul");
		}
		$(".slideon ul li:last").prependTo(".slideon ul");	
		$(".slideon ul li:last").prependTo(".slideon ul");	

		for (let j=1; j<=sindexon+1;j++) {
			slideonImg(sindexon,1);
		}

		auto2=setInterval(slideonAuto,4000); 

	});

  //Play,Stop 클릭
  $(".playon").hide(); 

  $(".stopon").click(function(){
    clearInterval(auto2);
    $(".stopon").hide();
		$(".playon").show();
  });
  $(".playon").click(function(){
    auto2=setInterval(slideonAuto,4000); 
    $(".playon").hide();
		$(".stopon").show();
  });

  //////커피 컨텐츠//////////////////////////////
	$(".thumbs a").click(function(){
    let val=$(this).index();
    let num=-270*val+20;//이미지의 가로폭+여백20px=1020씩 누적
    $("#coffee_gallery #largeImg").animate({"left":num});
    return false;
  });


});
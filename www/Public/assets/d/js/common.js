(function($) { 
var jSelect = $(".jsSelect"); 
$(jSelect).find("li:first").hover(function(){ 
//$(".s").css("background","url(images/68_60.png) 54px 0px no-repeat"); 
h=$(this).parent("ul").find("li").length; 
$(this).parent("ul").css("height",28*h) 
$(this).siblings("li:not(.s)").mouseenter(function(){ 
//$(".s").css("background","url(images/68_60.png) 54px 0px no-repeat"); 
$(this).css("background","#428bca").css("color","#FFFFFF") 
}); 
$(this).siblings("li:not(.s)").mouseleave(function(){ 
$(this).css("background","none").css("color","#428bca") 
//$(".s").css("background","url(images/68_60.png) 54px -30px no-repeat"); 
}); 

$(this).parent(jSelect).mouseleave(function(){ 
$(this).css("height",28) 
}); 
}); 
$(jSelect).find("li:not(.s)").click(function(){ 
var cContent=$(jSelect).find("li:first").html(); 
var cdContent = $(this).html(); 
$(jSelect).find("li:first").html(cdContent); 
$(this).html(cContent); 
$(this).find('a').removeClass('s'); 
$(this).find('a').removeAttr('style'); 
$(jSelect).find("li:first").addClass('s'); 
$(this).parent("ul").css("height",28); 
}); 
//$(".s").css("background","url(images/68_60.png) 54px -30px no-repeat"); 

})(jQuery); 

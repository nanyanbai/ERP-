var securityContext="./";
$("#header").load(securityContext+"/header.html",function(){
	var urll=location.href;
	var currentselect;
	if(urll.indexOf("index.html") != -1 ){
		currentselect = "selectIndex";
	}
	if(urll.indexOf("edmEmailMarketingSystem.html") != -1 ||urll.indexOf("erpOpenSourceSystem.html") != -1 || urll.indexOf("productIntro.html") != -1 || urll.indexOf("Fusionzoom-ERP.html") != -1 || urll.indexOf("Fusionzoom-Tool.html") != -1 || urll.indexOf("arsEvaluation.html") != -1|| urll.indexOf("http://review.fusionzoom.cn/noodlecampus/front/userRegist/search") != -1){
		currentselect = "sellectProductIntro";
	}
	if(urll.indexOf("pricing.html") != -1 ){
		currentselect = "selectPrice";
	}
	if(urll.indexOf("tech-support.html") != -1 || urll.indexOf("platform-icenses.html") != -1){
		currentselect = "serviceCurr";
	}
	if(urll.indexOf("http://www.fusionzoom.cn/blog") != -1 ){
		currentselect = "selectljbk";
	}
    $(".navbar-right li a").parent().removeClass('active');
    $('.'+currentselect).addClass("active");
    $('a[role="select"]').hover(function(){
    	$(this).addClass('active').next().removeClass('active');
    },function(){
    	$(this).removeClass('active').next().addClass('active');
    });
}) ;

$('#header').delegate('.navbar-right', 'click',function(){});

$("#fixed-menu").show();
//百度代码统计
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?e86f9aa8b2144cb37c0fa22a162f645c";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();

$("#header").css("margin-bottom","73px");
$("#slider-pic-area").css({
	"margin-top":"204px",
	"z-index":80
});

/**tab切换封装方法*/
 function ptabs(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("ptab-c" + i);
        menu.className = i == cursel ? "tab-current" : "";
        con.style.display = i == cursel ? "block" : "none";
    }
}

$('#tab_nav li').on('click',function(){
	var index=$(this).index();
	$('#tab_nav_content').find('.tab-pane').eq(index).addClass('active').siblings().removeClass('active');
});

$('#itemList li').hover(function () {
	var index=$(this).index();
	 $(this).addClass('active').siblings().removeClass('active');
	 $(".row-control-r").eq(index).show().siblings().hide();
});


//价格
$('.pricing-item-change').each(function(index){
	$(this).addClass('hide');
});

$('a[role="togglebtn"]').hover(function (){
	$(this).addClass('curr').parent().parent().parent().siblings().find('a').removeClass('curr');
});

$('a[role="togglebtn"]').on('click', function() {
	$(this).parent().parent('div[data-tyle="div_module').addClass('hide').next('.pricing-item-change').removeClass('hide');
	$(this).parent().parent('div[data-tyle="div_module').next('.pricing-item-change').css({'max-height':741+'px'});
	$(this).parent().parent().next().find('a[data-type="uparrow"]').addClass('up_arrow1');
});

$('a[data-type="uparrow"]').on('click',function (){
	 $(this).parent().parent('.pricing-item-change').addClass('hide').siblings('.pricing-item').removeClass('hide');
});


$('.mumber_mails').on({  
    mouseover : function(){  
       $(this).siblings().show();
    },mouseout : function(){  
      $('.showitem_list').hide();
    }   
});  


$(function (){
	$(".void").find('video').mouseover(function (){  
      $(this).attr('controls','controls');
      $(this).attr('title','ERP操作视频');
      $(this).css('cursor','pointer')
    }).mouseout(function (){  
      $(this).removeAttr('controls','');
      $(this).removeAttr('title','');
    });
});
	


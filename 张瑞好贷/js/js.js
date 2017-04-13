// JavaScript Document
window.onload=function(){
//banner
var ali=$('.banner ul li');
var aimg=$('.banner div img');
var timer=null;
var index=0;
ali.click(function(){
	index=$(this).index();
	aimg.eq(index).fadeIn().siblings().fadeOut();
	ali.eq(index).addClass('hover').siblings().removeClass('hover');
});

$('.banner').hover(
	function(){
		clearInterval(timer)	
	},function(){
		timer=setInterval(function(){
			index++;
			if(index==ali.length){
				index=0;
			}
			aimg.eq(index).fadeIn().siblings().fadeOut();
			ali.eq(index).addClass('hover').siblings().removeClass('hover');
		},1500)
}).trigger('mouseleave');
//address		
$('.nav-2').click(function(){
	$('.address img').toggle()
})
//选项卡
$(function(){
	$('.ltab-1 li').mouseover(function(){
		var index=$(this).index();
		$('.ltabx .ltabn').eq(index).show().siblings().hide();
	});
});			
}
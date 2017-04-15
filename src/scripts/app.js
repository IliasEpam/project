
/*import $ from 'jquery';*/
var main = function(){
	
	/**********switching from grid view to list and back*************/
	
	$('.grid-view').click(function(){
		$('.grid-view').parent().addClass('none');
		$('.list-view').parent().removeClass('none');
		$('.good').css({"display":"inline-block", "width":"200", "height":"220"});
		$('.good__wrap').css({"width":"200"});
		$('.good__desc').css({"display":"block", "width":"100%"});
		$('.good__price').css({"display":"block", "width":"100%", "text-align":"center" });
		$('.good__name').css({"display":"block", "width":"100%", "text-align":"center"});
		$('.good__desc-wide').addClass('none');
		$('.good__info').css({"display":"block", "height":"auto"});
	});
	$('.list-view').click(function(){
		$('.list-view').parent().addClass('none');
		$('.grid-view').parent().removeClass('none');
		$('.good').css({"display":"block", "width":"100%", "height":"100%"});
		$('.good__wrap').css({"width":"600", "text-align":"left"});
		$('.good__desc').css({"display":"inline-block", "width":"49%"});
		$('.good__price').css({"display":"inline-block", "width":"28%", "text-align":"left"});
		$('.good__name').css({"display":"inline-block", "width":"70%", "text-align":"left"});
		$('.good__desc-wide').removeClass('none');
		$('.good__info').css({"display":"flex", "align-content":"space-between", "flex-wrap":"wrap", "height":"160"});
	});
	
	/*****************registartion and logging in animation**********************/
	$('.navigation-top__profile').click(function(){
		$('.modal-background').removeClass('none');
		$('#sign-window').removeClass('none');
	});
	$('.modal-background').click(function(){
		$('.modal-background').addClass('none');
		$('#sign-window').addClass('none');
		$('#reg-window').addClass('none');
	});
	$('.reg').click(function(){
		$('#reg-window').removeClass('none');
		$('#sign-window').addClass('none');
	});
	$('.sign').click(function(){
		$('#reg-window').addClass('none');
		$('#sign-window').removeClass('none');
	});
	$('.modal-window__close').click(function(){
		$('.modal-background').addClass('none');
		$('#sign-window').addClass('none');
		$('#reg-window').addClass('none');		
	});
	
};
$(document).ready(main);
console.log('script is here');
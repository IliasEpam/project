
/*import $ from 'jquery';*/
var main = function(){
	
	/**********switching from grid view to list and back*************/
	
	$('.grid-view').click(function(){
		$('.grid-view').parent().addClass('none');
		$('.list-view').parent().removeClass('none');
		$('.good').css({"display":"inline-block", "width":"200", "height":"200"});
		$('.good-wrap').css({"width":"200"});
		$('.good-desc').css({"display":"block", "width":"100%"});
		$('.good__price').css({"display":"block", "width":"100%", "text-align":"center" });
		$('.good__name').css({"display":"block", "width":"100%", "text-align":"center"});
		$('.good__desc-wide').addClass('none');
		$('.good-info').css({"display":"block", "height":"auto"});
	});
	$('.list-view').click(function(){
		$('.list-view').parent().addClass('none');
		$('.grid-view').parent().removeClass('none');
		$('.good').css({"display":"block", "width":"100%", "height":"100%"});
		$('.good-wrap').css({"width":"600", "text-align":"left"});
		$('.good-desc').css({"display":"inline-block", "width":"49%"});
		$('.good__price').css({"display":"inline-block", "width":"49%", "text-align":"left"});
		$('.good__name').css({"display":"inline-block", "width":"49%", "text-align":"left"});
		$('.good__desc-wide').removeClass('none');
		$('.good-info').css({"display":"flex", "align-content":"space-between", "flex-wrap":"wrap", "height":"160"});
	});
	
	/*****************registartion and logging in animation**********************/
	$('.profile').click(function(){
		$('.modal-background').removeClass('none');
	});
	$('.modal-background').click(function(){
		$('.modal-background').addClass('none');
	});
	
}
$(document).ready(main);
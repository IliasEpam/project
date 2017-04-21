var main = function () {
	/**********switching from grid view to list and back*************/
	$('.grid-view').click(function () {
		$('.grid-view').removeClass('grid-view_visible');
		$('.list-view').addClass('list-view_visible');
		$('.good__desc-wide').removeClass('good__desc-wide_visible');
		$('.good').removeClass('good_list');
		$('.good__wrap').removeClass('good__wrap_list');
		$('.good__desc').removeClass('good__desc_list');
		$('.good__img').removeClass('good__img_list');
		$('.good__price').removeClass('good__price_list');
		$('.good__name').removeClass('good__name_list');
		$('.good__info').removeClass('good__info_list');
	});
	$('.list-view').click(function () {
		$('.list-view').removeClass('list-view_visible');
		$('.grid-view').addClass('grid-view_visible');
		$('.good__desc-wide').addClass('good__desc-wide_visible');
		$('.good').addClass('good_list');
		$('.good__wrap').addClass('good__wrap_list');
		$('.good__desc').addClass('good__desc_list');
		$('.good__img').addClass('good__img_list');
		$('.good__price').addClass('good__price_list');
		$('.good__name').addClass('good__name_list');
		$('.good__info').addClass('good__info_list');
	});
	/*****************registartion and logging in animation**********************/
	$('.navigation-top__profile').click(function () {
		$('.modal-background').addClass('modal-background_visible');
		$('#sign-window').addClass('modal-window_visible');
	});
	$('.modal-background').click(function () {
		$('.modal-background').removeClass('modal-background_visible');
		$('#sign-window').removeClass('modal-window_visible');
		$('#reg-window').removeClass('modal-window_visible');
	});
	$('.modal-window__reg-link').click(function () {
		$('#reg-window').addClass('modal-window_visible');
		$('#sign-window').removeClass('modal-window_visible');
	});
	$('.modal-window__sign-link').click(function () {
		$('#reg-window').removeClass('modal-window_visible');
		$('#sign-window').addClass('modal-window_visible');
	});
	$('.modal-window__close').click(function () {
		$('.modal-background').removeClass('modal-background_visible');
		$('#sign-window').removeClass('modal-window_visible');
		$('#reg-window').removeClass('modal-window_visible');
	});
	/********scroll down*******/
	$('.main-banner__scroll-down').click(function () {
		var heights = $(window).height() - 50;
		$("html, body").animate({ scrollTop: heights }, "slow");
	});
	/********scroll up*******/
	$(function () {
		if ($(window).scrollTop() >= $(window).height()) $(".scroll-up").addClass("scroll-up_visible");
		$(window).scroll(function () {
			if ($(window).scrollTop() <= $(window).height()) $(".scroll-up").removeClass("scroll-up_visible");else $(".scroll-up").addClass("scroll-up_visible");
		});
		$(".scroll-up").click(function () {
			$("html,body").animate({ scrollTop: 0 }, "slow");
		});
	});
};
$(document).ready(main);
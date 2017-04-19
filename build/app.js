(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
			}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, l, l.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		'use strict';

		var main = function main() {

			/**********switching from grid view to list and back*************/

			$('.grid-view').click(function () {
				$('.grid-view').addClass('none');
				$('.list-view').removeClass('none');
				$('.good').css({ "display": "inline-block", "width": "200" });
				$('.good__wrap').css({ "width": "200" });
				$('.good__desc').css({ "display": "block", "width": "100%" });
				$('.good__img-container').css({ "margin": "0px" });
				$('.good__price').css({ "display": "block", "width": "100%", "text-align": "center" });
				$('.good__name').css({ "display": "block", "width": "100%", "text-align": "center" });
				$('.good__desc-wide').addClass('none');
				$('.good__info').css({ "display": "block", "height": "auto" });
			});
			$('.list-view').click(function () {
				$('.list-view').addClass('none');
				$('.grid-view').removeClass('none');
				$('.good').css({ "display": "block", "width": "100%" });
				$('.good__wrap').css({ "width": "600", "text-align": "left" });
				$('.good__desc').css({ "display": "inline-block", "width": "60%" });
				$('.good__img-container').css({ "margin-right": "20px", "display": "inline-block" });
				$('.good__price').css({ "display": "inline-block", "width": "28%", "text-align": "left" });
				$('.good__name').css({ "display": "inline-block", "width": "70%", "text-align": "left" });
				$('.good__desc-wide').removeClass('none');
				$('.good__info').css({ "display": "flex", "align-content": "space-between", "flex-wrap": "wrap", "height": "160" });
			});

			/*****************registartion and logging in animation**********************/
			$('.navigation-top__profile').click(function () {
				$('.modal-background').removeClass('none');
				$('#sign-window').removeClass('none');
			});
			$('.modal-background').click(function () {
				$('.modal-background').addClass('none');
				$('#sign-window').addClass('none');
				$('#reg-window').addClass('none');
			});
			$('.reg').click(function () {
				$('#reg-window').removeClass('none');
				$('#sign-window').addClass('none');
			});
			$('.sign').click(function () {
				$('#reg-window').addClass('none');
				$('#sign-window').removeClass('none');
			});
			$('.modal-window__close').click(function () {
				$('.modal-background').addClass('none');
				$('#sign-window').addClass('none');
				$('#reg-window').addClass('none');
			});
			/********scroll down*******/
			$('.main-banner__scroll-down').click(function () {
				var heights = window.innerHeight;
				$("html, body").animate({ scrollTop: $(window).height() }, "slow");
			});
			/********scroll up*******/
			$(function () {
				if ($(window).scrollTop() >= $(window).height()) $(".scroll-up").removeClass("none");
				$(window).scroll(function () {
					if ($(window).scrollTop() <= $(window).height()) $(".scroll-up").addClass("none");else $(".scroll-up").removeClass("none");
				});
				$(".scroll-up").click(function () {
					$("html,body").animate({ scrollTop: 0 }, "slow");
				});
			});
		};
		$(document).ready(main);
	}, {}] }, {}, [1]);



},{}]},{},[1])


//# sourceMappingURL=app.js.map

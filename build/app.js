(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var main = function main() {
    /**********switching from grid view to list and back*************/
    $('.grid-view').click(function () {
        $('.grid-view').removeClass('grid-view--visible');
        $('.list-view').addClass('list-view--visible');
        $('.goods__desc-wide').removeClass('goods__desc-wide--visible');
        $('.goods__item').removeClass('goods--list');
        $('.goods__item-wrap').removeClass('goods__item-wrap--list');
        $('.goods__desc').removeClass('goods__desc--list');
        $('.goods__img').removeClass('goods__img--list');
        $('.goods__price').removeClass('goods__price--list');
        $('.goods__name').removeClass('goods__name--list');
        $('.goods__info').removeClass('goods__info--list');
    });
    $('.list-view').click(function () {
        $('.list-view').removeClass('list-view--visible');
        $('.grid-view').addClass('grid-view--visible');
        $('.goods__desc-wide').addClass('goods__desc-wide--visible');
        $('.goods__item').addClass('goods--list');
        $('.goods__item-wrap').addClass('goods__item-wrap--list');
        $('.goods__desc').addClass('goods__desc--list');
        $('.goods__img').addClass('goods__img--list');
        $('.goods__price').addClass('goods__price--list');
        $('.goods__name').addClass('goods__name--list');
        $('.goods__info').addClass('goods__info--list');
    });
    /*****************registartion and logging in animation**********************/
    $('.navigation-top__icon--profile').click(function () {
        $('.modal-background').addClass('modal-background--visible');
        $('#sign-window').addClass('modal-window--visible');
    });
    $('.modal-background').click(function () {
        $('.modal-background').removeClass('modal-background--visible');
        $('#sign-window').removeClass('modal-window--visible');
        $('#reg-window').removeClass('modal-window--visible');
    });
    $('.modal-window__reg-link').click(function () {
        $('#reg-window').addClass('modal-window--visible');
        $('#sign-window').removeClass('modal-window--visible');
    });
    $('.modal-window__sign-link').click(function () {
        $('#reg-window').removeClass('modal-window--visible');
        $('#sign-window').addClass('modal-window--visible');
    });
    $('.modal-window__close').click(function () {
        $('.modal-background').removeClass('modal-background--visible');
        $('#sign-window').removeClass('modal-window--visible');
        $('#reg-window').removeClass('modal-window--visible');
    });
    /********scroll down*******/
    $('.main-banner__scroll-down').click(function () {
        var heights = $(window).height() - 50;
        $("html, body").animate({ scrollTop: heights }, "slow");
    });
    /********scroll up*******/
    $(function () {
        if ($(window).scrollTop() >= $(window).height()) $(".scroll-up").addClass("scroll-up--visible");
        $(window).scroll(function () {
            if ($(window).scrollTop() <= $(window).height()) $(".scroll-up").removeClass("scroll-up--visible");else $(".scroll-up").addClass("scroll-up--visible");
        });
        $(".scroll-up").click(function () {
            $("html,body").animate({ scrollTop: 0 }, "slow");
        });
    });

    /*slider feature*/
};
$(document).ready(main);

},{}]},{},[1])


//# sourceMappingURL=app.js.map

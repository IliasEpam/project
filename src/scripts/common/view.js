import { getTemplate, manipulateClasses, scrollTo } from '../utils/utils';

export class view {

    constructor(data) {
        this.html = '';
        this.init(data);
    }
    updateView() {
        var container = document.getElementById('content');
        container.innerHTML = this.html;
    }
    showPopUp() {
        manipulateClasses('.modal-window', 'modal-window--visible', 'add');
        manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
    }
    controlWindows(event) {
        var eventTraget = event.target;
        if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
            manipulateClasses('.modal-window', 'modal-window--visible', 'remove');
            manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'remove');
            manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'remove');
        } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
            manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
            manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
        }
    }
    scrollUp() {
        scrollTo(0, 500);
    }
    showScrollUp() {
        if (document.body.scrollTop <= window.innerHeight) {
            manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
        } else {
            manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
        }
    }
}
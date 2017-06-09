import { getTemplate, manipulateClasses, scrollTo, corsApiVkRequest } from '../utils/utils';

class View {

    constructor(data) {
        this.html = '';
    }
    insertView() {
        var container = document.getElementById('content');
        container.innerHTML = this.html;
    }
    showPopUp() {
        localStorage.removeItem('cat-shop-token');
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
        scrollTo(0);
    }
    showScrollUp() {
        if (document.body.scrollTop < window.innerHeight - 50) {
            manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
        } else {
            manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
        }
    }
    sayHi() {
        var el = document.getElementById('userName');
        if (localStorage.getItem('cat-shop-token')) {
            corsApiVkRequest()
                .then(result => result.response[0].first_name)
                .then((name) => 'Hi ' + name)
                .then((phrase) => { el.innerHTML = phrase })
                .catch(err => console.log(err))
        } else {
            el.innerHTML = '';
        }
    }
}
export { View };
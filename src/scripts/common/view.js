import { getTemplate, manipulateClasses, scrollTo, delegateEvent } from '../utils/utils';

export class view {

    constructor() {
        this.html = '';
    }
    init(initialData) {
        var categoryTemplate = getTemplate('main-page');
        var compileTemplate = Handlebars.compile(categoryTemplate);
        var mainPage = compileTemplate(initialData);
        this.html = mainPage;
    }

    getHtml() {
        return this.html;
    }
    showPopUp() {
        delegateEvent(document, 'click', '.navigation-top__icon--profile', function() {
            manipulateClasses('.modal-window', 'modal-window--visible', 'add');
            manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
        });
    }
    controlWindows() {
        delegateEvent(document, 'click', '.modal-window', function(event) {
            var eventTraget = event.target;
            if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
                manipulateClasses('.modal-window', 'modal-window--visible', 'remove');
                manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'remove');
                manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'remove');
            } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
                manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
                manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
            }
        });
    }
    scrollUp() {
        delegateEvent(document, 'click', '.page__scroll-up', function() {
            scrollTo(0, 500);
        });
    }
    showScrollUp() {
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop <= window.innerHeight) {
                manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
            } else {
                manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
            }
        });
    }
}
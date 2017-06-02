import MainModel from '../models/models';
import { CartView } from '../views/cartView';
import { delegateEvent } from '../utils/utils';
export class CartPresenter {
    constructor() {
        this.model = new MainModel();
        this.view = new CartView();
        this.view.init(this.model.get());

        this.executeEvents();
        this.view.changePageTitle();
    }
    executeEvents() {
        delegateEvent(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
        delegateEvent(document, 'click', '.modal-window', this.view.controlWindows);
        delegateEvent(document, 'click', '.page__scroll-up', this.view.scrollUp);
        window.addEventListener('scroll', this.view.showScrollUp);
    }
    getView() {
        return this.view;
    }
}
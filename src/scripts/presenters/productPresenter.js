import MainModel from '../models/models';
import { ProductView } from '../views/productView';
import { delegateEvent } from '../utils/utils';
export class ProductPresenter {
    constructor(categoryPosition, productPosition) {
        this.model = new MainModel();
        this.view = new ProductView();
        this.view.init(this.model.get().categories[categoryPosition].goods[productPosition]);


        this.executeEvents();
        this.view.changePageTitle(this.model.get().categories[categoryPosition].goods[productPosition]);
    }
    executeEvents() {
        delegateEvent(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
        delegateEvent(document, 'click', '.modal-window', this.view.controlWindows);
        delegateEvent(document, 'click', '.page__scroll-up', this.view.scrollUp);
        delegateEvent(document, 'click', '.slider', this.view.carousel);
        window.addEventListener('scroll', this.view.showScrollUp);
    }
    getView() {
        return this.view;
    }
}
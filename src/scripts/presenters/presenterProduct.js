import mainModel from '../models/models';
import { productView } from '../views/viewProduct';
import { delegateEvent } from '../utils/utils';
export class productPresenter {
    constructor(categoryPosition, productPosition) {
        this.model = new mainModel();
        this.view = new productView();

        this.view.init(this.model.get().categories[categoryPosition].goods[productPosition]);


        this.executeEvents();
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
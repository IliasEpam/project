import mainModel from '../models/models';
import { categoryView } from '../views/viewCategory';
import { delegateEvent } from '../utils/utils';
export class categoryPresenter {
    constructor(categoryPosition) {
        this.model = new mainModel();
        this.view = new categoryView();
        this.view.init(this.model.get().categories[categoryPosition]);

        this.executeEvents();
    }
    executeEvents() {
        delegateEvent(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
        delegateEvent(document, 'click', '.modal-window', this.view.controlWindows);
        delegateEvent(document, 'click', '.page__scroll-up', this.view.scrollUp);
        delegateEvent(document, 'click', '.main-banner__scroll-down', this.view.scrollDown);
        delegateEvent(document, 'click', '.grid-view', this.view.changeToGridView);
        delegateEvent(document, 'click', '.list-view', this.view.changeToListView);
        window.addEventListener('scroll', this.view.showScrollUp);
    }
    getView() {
        return this.view;
    }
}
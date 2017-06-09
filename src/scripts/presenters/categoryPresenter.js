import MainModel from '../models/models';
import { CategoryView } from '../views/categoryView';
import { delegateEvent } from '../utils/utils';
export class CategoryPresenter {
    constructor(categoryId) {
        this.model = new MainModel();
        this.view = new CategoryView();

        this.model.getCategoryProducts(categoryId)
            .then((data) => {
                this.view.init(data);
                this.view.changePageTitle(data.goods[0]);
            });
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
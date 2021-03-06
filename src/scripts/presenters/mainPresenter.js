import MainModel from '../models/models';
import { MainView } from '../views/mainView';
import { delegateEvent } from '../utils/utils';
export class MainPresenter {
    constructor() {
        this.model = new MainModel();
        this.view = new MainView();

        this.model.getCategories()
            .then((data) => {
                this.view.init(data);
            });

        this.executeEvents();
        this.view.changePageTitle();
    }
    executeEvents() {
        delegateEvent(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
        delegateEvent(document, 'click', '.modal-window', this.view.controlWindows);
        delegateEvent(document, 'click', '.page__scroll-up', this.view.scrollUp);
        delegateEvent(document, 'click', '.main-banner__scroll-down', this.view.scrollDown);
        window.addEventListener('scroll', this.view.showScrollUp);
    }
}
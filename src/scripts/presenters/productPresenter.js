import MainModel from '../models/models';
import { ProductView } from '../views/productView';
import { delegateEvent } from '../utils/utils';
export class ProductPresenter {
    constructor(productId) {
        this.view = new ProductView();
        this.model = new MainModel();

        this.model.getProduct(productId)
            .then((result) => {
                this.view.init(result);
                this.view.changePageTitle(result);
            });

        this.executeEvents();
    }
    executeEvents() {
        delegateEvent(document, 'click', '.navigation-top__icon--profile', this.view.showPopUp);
        delegateEvent(document, 'click', '.modal-window', this.view.controlWindows);
        delegateEvent(document, 'click', '.page__scroll-up', this.view.scrollUp);
        delegateEvent(document, 'click', '.slider__arrow--right', this.view.carouselSetNextImg);
        delegateEvent(document, 'click', '.slider__shown-img', this.view.carouselSetNextImg);
        delegateEvent(document, 'click', '.slider__source-img', this.view.carouselSetTargetImg);
        delegateEvent(document, 'click', '.slider__arrow--left', this.view.carouselSetPrevImg);

        window.addEventListener('scroll', this.view.showScrollUp);
    }
    getView() {
        return this.view;
    }
}
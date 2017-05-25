import mainModel from '../models/models';
import { productView } from '../views/viewProduct';
export class productPresenter {
    constructor(categoryPosition, productPosition) {
        this.model = new mainModel();
        this.view = new productView();

        this.view.init(this.model.get().categories[categoryPosition].goods[productPosition]);
        this.view.showPopUp();
        this.view.controlWindows();
        this.view.carousel();
        this.view.showScrollUp();
        this.view.scrollUp();
    }
    getView() {
        return this.view;
    }
}
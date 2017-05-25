import mainModel from '../models/models';
import { categoryView } from '../views/viewCategory';
export class categoryPresenter {
    constructor(categoryPosition) {
        this.model = new mainModel();
        this.view = new categoryView();

        this.view.init(this.model.get().categories[categoryPosition]);
        this.view.showPopUp();
        this.view.controlWindows();
        this.view.changeToGridView();
        this.view.changeToListView();
        this.view.showScrollUp();
        this.view.scrollUp();
    }
    getView() {
        return this.view;
    }
}
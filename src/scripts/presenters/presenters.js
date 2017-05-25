import mainModel from '../models/models';
import { mainView } from '../views/mainView';
export class mainPresenter {
    constructor() {
        this.model = new mainModel();
        this.view = new mainView();
        this.view.init(this.model.get());
        this.view.showPopUp();
        this.view.controlWindows();
        this.view.scrollDown();
        this.view.showScrollUp();
        this.view.scrollUp();
    }
    getView() {
        return this.view;
    }
}
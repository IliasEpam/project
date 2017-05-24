import mainModel from '../models/models';
import productView from '../views/viewProduct';
export default function productPresenter(categoryPosition, productPosition) {
    var view;
    var model;

    function init() {
        model = new mainModel();
        view = new productView(model.get().categories[categoryPosition].goods[productPosition]);

        view.showPopUp();
        view.controlWindows();
        view.showScrollUp();
        view.scrollUp();
        view.carousel();
    }

    var presenter = {
        getView: function() {
            return view;
        }
    };

    init();
    return presenter;
}
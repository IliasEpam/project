import mainModel from '../models/models';
import goodsView from '../views/viewGoods';
export default function goodsPresenter() {
    var view;
    var model;

    function init() {
        model = new mainModel();
        view = new goodsView(model.get());

        view.showPopUp();
        view.controlWindows();
        view.showScrollUp();
        view.scrollUp();
    }

    var presenter = {
        getView: function() {
            return view;
        }
    };

    init();
    return presenter;
}
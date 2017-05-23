import mainModel from '../models/models';
import mainView from '../views/views';
export default function mainPresenter() {
    var view;
    var model;

    function init() {
        model = new mainModel();
        view = new mainView(model.get());

        view.showPopUp();
        view.controlWindows();
        view.scrollDown();
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
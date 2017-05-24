import mainModel from '../models/models';
import categoryView from '../views/viewCategory';
export default function categoryPresenter(categoryId) {
    var view;
    var model;

    function init() {
        model = new mainModel();
        view = new categoryView(model.get().categories[categoryId]);


        view.showPopUp();
        view.controlWindows();
        view.showScrollUp();
        view.scrollUp();
        view.changeToListView();
        view.changeToGridView();
    }

    var presenter = {
        getView: function() {
            return view;
        }
    };

    init();
    return presenter;
}
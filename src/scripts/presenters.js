function mainPresenter() {
    var view;
    var model;

    function init() {
        model = new mainModel();
        view = new mainView(model.get());

        view.showPopUp();
        view.controlWindows();
    }

    var public = {
        getView: function() {
            return view;
        }
    };

    init();
    return public;
}
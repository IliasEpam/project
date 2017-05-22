var customEvents = new Reactor();

var page = new mainPresenter();
$("body").append(page.getView().getHtml());
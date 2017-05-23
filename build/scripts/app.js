var page = new mainPresenter();
var targetContainer = document.getElementById('content');
targetContainer.innerHTML = page.getView().getHtml();
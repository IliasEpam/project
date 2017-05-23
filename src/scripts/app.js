var page = new mainPresenter();
var targetContainer = document.getElementById('content');
targetContainer.innerHTML = page.getView().getHtml();



/*var element = document.querySelector('#content');


var onHashChange = function() {
    switch (location.hash) {
        case '':
            page = new mainPresenter();
            break;
        case 'cart':
            page = new mainPresenter();
            break;
    }
    targetContainer.innerHTML = page.getView().getHtml();
};

window.addEventListener('hashchange', onHashChange);

onHashChange();*/
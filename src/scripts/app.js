import mainPresenter from './presenters/presenters.js';
import goodsPresenter from './presenters/presenterGoods.js';

var page /*= new mainPresenter()*/ ;
var targetContainer = document.getElementById('content');
//targetContainer.innerHTML = page.getView().getHtml();



//var element = document.querySelector('#content');


function changeView() {
    switch (location.hash) {
        case '':
            page = new mainPresenter();
            break;
        case '#goods':
            console.log('show me goods');
            page = new goodsPresenter();
            break;
    }
    targetContainer.innerHTML = page.getView().getHtml();
};

window.addEventListener('hashchange', function() {
    switch (location.hash) {
        case '':
            page = new mainPresenter();
            break;
        case '#goods':
            console.log('show me goods');
            page = new goodsPresenter();
            break;
    }
    targetContainer.innerHTML = page.getView().getHtml();
});

changeView();
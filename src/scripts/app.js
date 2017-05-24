import mainPresenter from './presenters/presenters.js';
import categoryPresenter from './presenters/presenterCategory.js';

var page /*= new mainPresenter()*/ ;
var targetContainer = document.getElementById('content');
//targetContainer.innerHTML = page.getView().getHtml();



//var element = document.querySelector('#content');


function changeView() {
    if (location.hash === '') {
        page = new mainPresenter();
    } else if (location.hash.indexOf('category') >= 0) {
        var categoryId = location.hash.substring(9);
        page = new categoryPresenter(categoryId);
    }
    targetContainer.innerHTML = page.getView().getHtml();
};

window.addEventListener('hashchange', changeView);

changeView();
import { mainPresenter } from './presenters/presenters.js';
import { categoryPresenter } from './presenters/presenterCategory.js';
import { productPresenter } from './presenters/presenterProduct.js';

var page;

function changeView() {
    if (location.hash === '') {
        page = new mainPresenter();
    } else if (location.hash.indexOf('category') >= 0) {
        var categoryPosition = location.hash.substring(9);
        page = new categoryPresenter(categoryPosition);
    } else if (location.hash.indexOf('product') >= 0) {
        var reg = /\d+/g;
        var digitsFromHash = location.hash.match(reg);
        var categoryPosition = digitsFromHash[0];
        var productPosition = digitsFromHash[1];
        page = new productPresenter(categoryPosition, productPosition);
    }
};

window.addEventListener('hashchange', changeView);

changeView();
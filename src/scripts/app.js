import { MainPresenter } from './presenters/mainPresenter.js';
import { CategoryPresenter } from './presenters/presenterCategory.js';
import { ProductPresenter } from './presenters/presenterProduct.js';

var page;

function changeView() {
    if (location.hash === '') {
        page = new MainPresenter();
    } else if (location.hash.indexOf('category') >= 0) {
        var categoryPosition = location.hash.substring(9);
        page = new CategoryPresenter(categoryPosition);
    } else if (location.hash.indexOf('product') >= 0) {
        var reg = /\d+/g;
        var digitsFromHash = location.hash.match(reg);
        var categoryPosition = digitsFromHash[0];
        var productPosition = digitsFromHash[1];
        page = new ProductPresenter(categoryPosition, productPosition);
    }
};

window.addEventListener('hashchange', changeView);

changeView();
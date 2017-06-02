import { MainPresenter } from './presenters/mainPresenter.js';
import { CategoryPresenter } from './presenters/categoryPresenter.js';
import { ProductPresenter } from './presenters/productPresenter.js';
import { CartPresenter } from './presenters/cartPresenter.js';
import { ContactsPresenter } from './presenters/contactsPresenter.js';
import { PaymentPresenter } from './presenters/paymentPresenter.js';
import { AuthPresenter } from './presenters/authPresenter.js';
import { scrollTo } from './utils/utils';

var page;

function changeView() {
    if (location.hash.indexOf('access_token') >= 0) {
        page = new AuthPresenter();
    } else if (location.hash === '') {
        page = new MainPresenter();
        scrollTo(0);
    } else if (location.hash.indexOf('category') >= 0) {
        var categoryPosition = location.hash.substring(9);
        page = new CategoryPresenter(categoryPosition);
        scrollTo(0);
    } else if (location.hash.indexOf('product') >= 0) {
        var reg = /\d+/g;
        var numbersFromHash = location.hash.match(reg);
        var categoryPosition = numbersFromHash[0];
        var productPosition = numbersFromHash[1];
        page = new ProductPresenter(categoryPosition, productPosition);
        scrollTo(0);
    } else if (location.hash.indexOf('cart') >= 0) {
        page = new CartPresenter();
        scrollTo(0);
    } else if (location.hash.indexOf('contacts') >= 0) {
        page = new ContactsPresenter();
        scrollTo(0);
    } else if (location.hash.indexOf('payment') >= 0) {
        page = new PaymentPresenter();
        scrollTo(0);
    }
};

window.addEventListener('hashchange', changeView);

changeView();
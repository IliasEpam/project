import UserModel from '../models/userModel';
import { AuthView } from '../views/authView';
import { delegateEvent, basicURI } from '../utils/utils';
export class AuthPresenter {
    constructor() {
        this.model = new UserModel();
        this.view = new AuthView();
        this.view.init(this.model.get());

        this.executeEvents();
    }
    executeEvents() {
        var hash = location.hash;
        var firstChar = hash.indexOf('=') + 1;
        var lastChar = hash.indexOf('&');
        var token = hash.slice(firstChar, lastChar);
        localStorage.setItem('cat-shop-token', token);
        window.location = basicURI;
    }
}
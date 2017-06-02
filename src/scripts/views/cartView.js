import { View } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo } from '../utils/utils';

export class CartView extends View {

    init(initialData) {
        getTemplate('cart')
            .then((results) => Handlebars.compile(results))
            .then((compileTemplate) => compileTemplate(initialData))
            .then((html) => { this.html = html })
            .then(() => { this.insertView() })
            .catch(err => console.log(err));
        this.sayHi();
    }
    changePageTitle() {
        var target = document.getElementsByTagName('title')[0];
        target.innerHTML = 'Cart – Cat Shop';
    }
}
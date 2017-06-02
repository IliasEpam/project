import { View } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo } from '../utils/utils';

export class PaymentView extends View {

    init(initialData) {
        getTemplate('payment')
            .then((results) => Handlebars.compile(results))
            .then((compileTemplate) => compileTemplate(initialData))
            .then((html) => { this.html = html })
            .then(() => { this.insertView() })
            .catch(err => console.log(err));
        this.sayHi();
    }
    scrollDown() {
        scrollTo(window.innerHeight - 50);
    }
    changePageTitle() {
        var target = document.getElementsByTagName('title')[0];
        target.innerHTML = 'Payment Information';
    }
}
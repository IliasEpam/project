import { View } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo, corsApiVkRequest } from '../utils/utils';

export class MainView extends View {

    init(initialData) {
        getTemplate('main-page')
            .then((results) => Handlebars.compile(results))
            .then((compileTemplate) => compileTemplate(initialData))
            .then((mainPage) => { this.html = mainPage })
            .then(() => { this.insertView() })
            .catch(err => console.log(err));
        this.sayHi();
    }
    scrollDown() {
        scrollTo(window.innerHeight - 50);
    }
    changePageTitle() {
        var target = document.getElementsByTagName('title')[0];
        target.innerHTML = 'Cat Shop';
    }
}
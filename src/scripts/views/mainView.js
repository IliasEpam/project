import { view } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo } from '../utils/utils';

export class mainView extends view {

    init(initialData) {
        var categoryTemplate = getTemplate('main-page');
        var compileTemplate = Handlebars.compile(categoryTemplate);
        var mainPage = compileTemplate(initialData);
        this.html = mainPage;
        this.updateView();
    }
    scrollDown() {
        scrollTo(window.innerHeight - 50, 300);
    }
}
import { View } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo } from '../utils/utils';

export class MainView extends View {

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
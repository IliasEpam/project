import { View } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo } from '../utils/utils';
export class CategoryView extends View {
    init(initialData) {
        getTemplate('category')
            .then((results) => Handlebars.compile(results))
            .then((compileTemplate) => compileTemplate(initialData))
            .then((html) => { this.html = html })
            .then(() => { this.insertView() })
            .catch(err => console.log(err));
        this.sayHi();
    }
    changeToListView() {
        manipulateClasses('.grid-view', 'grid-view--visible', 'add');
        manipulateClasses('.list-view', 'list-view--visible', 'remove');
        manipulateClasses('.goods__good-description', 'goods__good-description--visible', 'add');
        manipulateClasses('.goods__good', 'goods__good--list', 'add');
        manipulateClasses('.goods__good-info', 'goods__good-info--list', 'add');
        manipulateClasses('.goods__good-img', 'goods__good-img--list', 'add');
        manipulateClasses('.goods__good-price', 'goods__good-price--list', 'add');
        manipulateClasses('.goods__good-name', 'goods__good-name--list', 'add');
    }
    changeToGridView() {
        manipulateClasses('.goods__good-description', 'goods__good-description--visible', 'remove');
        manipulateClasses('.goods__good', 'goods__good--list', 'remove');
        manipulateClasses('.goods__good-info', 'goods__good-info--list', 'remove');
        manipulateClasses('.goods__good-img', 'goods__good-img--list', 'remove');
        manipulateClasses('.goods__good-price', 'goods__good-price--list', 'remove');
        manipulateClasses('.goods__good-name', 'goods__good-name--list', 'remove');
        manipulateClasses('.grid-view', 'grid-view--visible', 'remove');
        manipulateClasses('.list-view', 'list-view--visible', 'add');
    }
    changePageTitle(someData) {
        var target = document.getElementsByTagName('title')[0];
        target.innerHTML = someData.categoryName;
    }

}
import { View } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo } from '../utils/utils';

export class ContactsView extends View {
    init(initialData) {
        getTemplate('contacts')
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
        target.innerHTML = 'Contact Information';
    }
    copyInputValues() {
        var checkbox = document.getElementById('ckeckboxSameAdress');
        var allAdressInputs = document.querySelectorAll('.contacts__input');
        if (checkbox.checked) {
            for (var i = 0; i < allAdressInputs.length / 2; i++) {
                allAdressInputs[i + allAdressInputs.length / 2].value = allAdressInputs[i].value;
            }
        } else {
            for (var i = 0; i < allAdressInputs.length / 2; i++) {
                allAdressInputs[i + allAdressInputs.length / 2].value = '';
            }
        }
    }
}
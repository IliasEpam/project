import { View } from '../common/view';
import { getTemplate, manipulateClasses, scrollTo, delegateEvent } from '../utils/utils';
export class ProductView extends View {

    init(initialData) {
        getTemplate('product')
            .then((results) => Handlebars.compile(results))
            .then((compileTemplate) => compileTemplate(initialData))
            .then((html) => { this.html = html })
            .then(() => { this.insertView() })
            .catch(err => console.log(err));
        this.sayHi();
    }
    /*carousel(event) {
        var currentImg = document.querySelector('.slider__source-img--active');
        var sources = document.querySelector('.slider__source');
        var bigImg = document.querySelector('.slider__shown-img');
        var eventTarget = event.target;
        if (eventTarget.classList.contains('slider__arrow--left')) {
            if (currentImg.previousElementSibling === null) {
                var source = sources.lastElementChild.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                sources.lastElementChild.classList.add('slider__source-img--active');
            } else {
                var source = currentImg.previousElementSibling.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                currentImg.previousElementSibling.classList.add('slider__source-img--active');
            }
            bigImg.setAttribute('src', source);
        } else if (eventTarget.classList.contains('slider__arrow--right') || eventTarget.classList.contains('slider__shown-img')) {
            if (currentImg.nextElementSibling === null) {
                var source = sources.firstElementChild.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                sources.firstElementChild.classList.add('slider__source-img--active');
            } else {
                var source = currentImg.nextElementSibling.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                currentImg.nextElementSibling.classList.add('slider__source-img--active');
            }
            bigImg.setAttribute('src', source);
        } else if (eventTarget.classList.contains('slider__source-img')) {
            var source = eventTarget.getAttribute('src');
            currentImg.classList.remove('slider__source-img--active');
            eventTarget.classList.add('slider__source-img--active');
            bigImg.setAttribute('src', source);
        }
    }*/
    carouselSetNextImg(){
        var currentImg = document.querySelector('.slider__source-img--active');
        var sources = document.querySelector('.slider__source');
        var bigImg = document.querySelector('.slider__shown-img');
        if (currentImg.nextElementSibling === null) {
                var source = sources.firstElementChild.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                sources.firstElementChild.classList.add('slider__source-img--active');
            } else {
                var source = currentImg.nextElementSibling.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                currentImg.nextElementSibling.classList.add('slider__source-img--active');
            }
        bigImg.setAttribute('src', source);
    }
    carouselSetPrevImg(){
        var currentImg = document.querySelector('.slider__source-img--active');
        var sources = document.querySelector('.slider__source');
        var bigImg = document.querySelector('.slider__shown-img');
        if (currentImg.previousElementSibling === null) {
                var source = sources.lastElementChild.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                sources.lastElementChild.classList.add('slider__source-img--active');
            } else {
                var source = currentImg.previousElementSibling.getAttribute('src');
                currentImg.classList.remove('slider__source-img--active');
                currentImg.previousElementSibling.classList.add('slider__source-img--active');
            }
        bigImg.setAttribute('src', source);
    }
    carouselSetTargetImg(event){
        var currentImg = document.querySelector('.slider__source-img--active');
        var bigImg = document.querySelector('.slider__shown-img');
        var eventTarget = event.target;
        var source = eventTarget.getAttribute('src');
        currentImg.classList.remove('slider__source-img--active');
        eventTarget.classList.add('slider__source-img--active');
        bigImg.setAttribute('src', source);
    }

    changePageTitle(someData) {
        var target = document.getElementsByTagName('title')[0];
        target.innerHTML = someData.title;
    }

}
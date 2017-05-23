    function manipulateClasses(selector, actionClass, action) {
        var selectedElements = document.querySelectorAll(selector);
        if (action === 'add') {
            for (var i = 0; i < selectedElements.length; i++) {
                selectedElements[i].classList.add(actionClass);
            }
        } else if (action === 'remove') {
            for (var i = 0; i < selectedElements.length; i++) {
                selectedElements[i].classList.remove(actionClass);
            }
        } else if (action === 'toggle') {
            for (var i = 0; i < selectedElements.length; i++) {
                selectedElements[i].classList.toggle(actionClass);
            }
        }
    };
    /************modal windows functions**********/
    function showModalWindow() {
        manipulateClasses('.modal-window', 'modal-window--visible', 'add');
        manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'add');
    }

    function closeAllModalWindows() {
        manipulateClasses('.modal-window', 'modal-window--visible', 'remove');
        manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'remove');
        manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'remove');
    }

    function swapModalWindow() {
        manipulateClasses('#reg-window', 'modal-window__pop-ups--visible', 'toggle');
        manipulateClasses('#sign-window', 'modal-window__pop-ups--visible', 'toggle');
    }

    function controlModalWindow(event) {
        var eventTraget = event.target;
        if (eventTraget.classList.contains('modal-window') || eventTraget.classList.contains('modal-window__close')) {
            closeAllModalWindows();
        } else if (eventTraget.classList.contains('modal-window__sign-link') || eventTraget.classList.contains('modal-window__reg-link')) {
            swapModalWindow();
        }
    }
    /**********swapping view of the goods in a category page*********/
    function changeToListView() {
        manipulateClasses('.grid-view', 'grid-view--visible', 'add');
        manipulateClasses('.list-view', 'list-view--visible', 'remove');
        manipulateClasses('.goods__good-description', 'goods__good-description--visible', 'add');
        manipulateClasses('.goods__good', 'goods__good--list', 'add');
        manipulateClasses('.goods__good-info', 'goods__good-info--list', 'add');
        manipulateClasses('.goods__good-img', 'goods__good-img--list', 'add');
        manipulateClasses('.goods__good-price', 'goods__good-price--list', 'add');
        manipulateClasses('.goods__good-name', 'goods__good-name--list', 'add');
    };

    function changeToGridView() {
        manipulateClasses('.goods__good-description', 'goods__good-description--visible', 'remove');
        manipulateClasses('.goods__good', 'goods__good--list', 'remove');
        manipulateClasses('.goods__good-info', 'goods__good-info--list', 'remove');
        manipulateClasses('.goods__good-img', 'goods__good-img--list', 'remove');
        manipulateClasses('.goods__good-price', 'goods__good-price--list', 'remove');
        manipulateClasses('.goods__good-name', 'goods__good-name--list', 'remove');
        manipulateClasses('.grid-view', 'grid-view--visible', 'remove');
        manipulateClasses('.list-view', 'list-view--visible', 'add');
    };

    function scrollTo(to, duration) {
        var difference = to - document.body.scrollTop;
        var step = difference / duration * 20;
        setTimeout(function() {
            document.body.scrollTop = document.body.scrollTop + step;
            if (document.body.scrollTop === to) return;
            scrollTo(to, duration - 10);
        }, 10);
    }

    function showScrollTop() {
        if (document.body.scrollTop <= window.innerHeight) {
            manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'remove');
        } else {
            manipulateClasses('.page__scroll-up', 'page__scroll-up--visible', 'add');
        }
    }
    window.addEventListener('scroll', showScrollTop);

    function slide(event) {
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
    }


    function copyInputValues() {
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
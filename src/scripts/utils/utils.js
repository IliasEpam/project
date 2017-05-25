export function getTemplate(fileName) {
    var template = '';
    $.ajax({
        url: 'templates/' + fileName + '.html',
        dataType: 'html',
        async: false,
        success: function(data) {
            template = data;
        },
        error: function(request, status, error) {
            console.log('ERROR template ' + fileName + '.html ' + request.status + ' ' + error);
        }
    });
    return template;
};

export function manipulateClasses(selector, actionClass, action) {
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

export function scrollTo(to, duration) {
    var difference = to - document.body.scrollTop;
    var step = difference / duration * 20;
    setTimeout(function() {
        document.body.scrollTop = document.body.scrollTop + step;
        if (document.body.scrollTop === to) return;
        scrollTo(to, duration - 10);
    }, 10);
}

export function delegateEvent(element, e, selector, handler) {
    element.addEventListener(e, function(event) {
        var targetElement = event.target;
        while (targetElement && targetElement !== this) {
            if (targetElement.matches(selector)) {
                handler.call(targetElement, event);
            }
            targetElement = targetElement.parentNode;
        }
    });
}
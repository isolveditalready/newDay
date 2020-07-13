var lifeView = new LifeView(document.getElementById('grid'), 12)

function $(selector, container) {
    return (container || document).querySelector(selector);
}

var next = $('button.next')

next.addEventListener('click', function () {
    lifeView.next();
    setInterval(function () {
        lifeView.next();
    }, 500)
})
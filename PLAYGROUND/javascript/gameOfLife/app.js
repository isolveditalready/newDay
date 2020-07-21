var lifeView = new LifeView(document.getElementById('grid'), 24);

function $(selector, container) {
    return (container || document).querySelector(selector);
}

(function () {
    var buttons = {
        next: $('button.next')
        // 
    }

    buttons.next.addEventListener('click', function () {
        lifeView.next();
    })

    $('#autoplay').addEventListener('change', function () {
        buttons.next.textContent = this.checked ? 'Start' : 'Next';
        lifeView.autoplay = this.checked
    })
        console.log('yes')

(function () {
    function $(selector, container) {
        console.log(selector)
        let jot = document.querySelector("myelem")
        console.log(jot)
        return (container || document).querySelector(selector)
    }
    console.log("reload")
    let myelem = $('#myelem')
    myelem.addEventListener('click', () => {
        console.log('shitme')
    })



})()
(function shitnow() {
    console.log("loaded")
    let shits = document.querySelectorAll(".shit")
    console.dir(shits)
    console.log("loaded2")

    shits.forEach((shit, index) => {
        shit.addEventListener('click', () => {
            console.dir(shit)
            alert("you are not shitting me " + shit.textContent)
        })
    })
})();
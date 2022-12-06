document.addEventListener("click", (e) => {
    if (e.target.classList.contains("increaseCountIcon")) {
        let curValue = localStorage.getItem((+(e.target.parentElement.querySelector(".counter-text").id)).toString())

        if (!curValue) {
            let newValue = +(e.target.parentElement.querySelector(".counter-text").innerText) + 1
            e.target.parentElement.querySelector(".counter-text").innerText = newValue
            localStorage.setItem(e.target.parentElement.querySelector(".counter-text").id, newValue.toString())
        }

        let newValue = +curValue + 1

        e.target.parentElement.querySelector(".counter-text").innerText = newValue

        localStorage.setItem((+(e.target.parentElement.querySelector(".counter-text").id)).toString(), newValue.toString())
    }

    if (e.target.classList.contains("decreaseCountIcon")) {
        let curValue = localStorage.getItem((+(e.target.parentElement.querySelector(".counter-text").id)).toString())

        if (!curValue) {
            let newValue = +(e.target.parentElement.querySelector(".counter-text").innerText) - 1
            e.target.parentElement.querySelector(".counter-text").innerText = newValue
            localStorage.setItem(e.target.parentElement.querySelector(".counter-text").id, newValue.toString())
        }

        let newValue = +curValue - 1

        e.target.parentElement.querySelector(".counter-text").innerText = newValue

        localStorage.setItem(e.target.parentElement.querySelector(".counter-text").id, newValue.toString())
    }
});
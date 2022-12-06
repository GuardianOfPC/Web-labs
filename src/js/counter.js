document.addEventListener("click", (e) => {
    if (e.target.classList.contains("increaseCountIcon")) {
        e.target.parentElement.querySelector(".counter-text").innerText = +(e.target.parentElement.querySelector(".counter-text").innerText) + 1
    }

    if (e.target.classList.contains("decreaseCountIcon")) {
        e.target.parentElement.querySelector(".counter-text").innerText = +(e.target.parentElement.querySelector(".counter-text").innerText) - 1
    }

    if (e.target.tagName === 'IMG') {
        if (e.target.parentElement.classList.contains("increaseCountIcon")) {
            e.target.parentElement.parentElement.parentElement.querySelector(".counter-text").innerText = +(e.target.parentElement.parentElement.parentElement.querySelector(".counter-text").innerText) + 1
        }

        if (e.target.parentElement.classList.contains("decreaseCountIcon")) {
            e.target.parentElement.parentElement.parentElement.querySelector(".counter-text").innerText = +(e.target.parentElement.parentElement.parentElement.querySelector(".counter-text").innerText) - 1
        }
    }

});
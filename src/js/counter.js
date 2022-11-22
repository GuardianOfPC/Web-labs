let increaseButtonElement = [...document.querySelectorAll(".increaseCountIcon")];
let countElements = [...document.querySelectorAll('.counter-text')];
let decreaseButtonElement = [...document.querySelectorAll(".decreaseCountIcon")];

let countArray = countElements.map(e => parseInt(e.textContent));

increaseButtonElement.forEach((b, index) => {
    b.addEventListener('click', () => {
        countElements[index].innerHTML = +(countElements[index].innerHTML) + 1
    })
})
decreaseButtonElement.forEach((b, index) => {
    b.addEventListener('click', () => {
        countElements[index].innerHTML = +(countElements[index].innerHTML) - 1
    })
})
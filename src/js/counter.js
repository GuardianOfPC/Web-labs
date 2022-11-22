const increaseButtonElement = [...document.querySelectorAll(".increaseCountIcon")];
const countElements = [...document.querySelectorAll('.counter-text')];
const decreaseButtonElement = [...document.querySelectorAll(".decreaseCountIcon")];

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
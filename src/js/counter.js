const counterElement = document.querySelector('.counter');
counterElement.style.display = 'block';

class Counter {
    #count = 0;

    constructor(counter) {
        this.countElement = counter.querySelector('span');
        this.increaseButtonElement = counter.querySelector(".increaseCountIcon");
        this.decreaseButtonElement = counter.querySelector(".decreaseCountIcon");

        // Initializes count
        this.#count = parseInt(this.countElement.textContent);

        // Adds event listener
        this.increaseButtonElement.addEventListener('click', this.increaseCount);
        this.decreaseButtonElement.addEventListener('click', this.decreaseCount);
    }

    updateCounter() {
        this.countElement.textContent = this.#count;
    }

    increaseCount = () => {
        this.#count = this.#count + 1;
        this.updateCounter();
    }

    decreaseCount = () => {
        this.#count = this.#count - 1;
        this.updateCounter();
    }
}

// Использование
const counter = new Counter(counterElement);
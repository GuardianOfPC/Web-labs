const sideBar = document.querySelector(".sidebar")
const addPostElement = document.querySelector(".add-post-box")


let idNum = 2
addPostElement.addEventListener('click', () => {

    let div = document.createElement('div');
    div.className = "post";
    idNum = (idNum + 1)
    div.innerHTML = `<div class="counter">
            <button class="increaseCountIcon">
                <img
                        alt=""
                        src="../img/arrowUp.svg"
                        style="pointer-events: none;"
                />
            </button>
            <span id="${idNum}" class="counter-text">0</span>
            <button class="decreaseCountIcon">
                <img
                        alt=""
                        src="../img/arrowDown.svg"
                        style="pointer-events: none;"
                />
            </button>
        </div>
        <div class="post-box">
            <div class="top-side-of-post">
                <div class="avatar"></div>
                <p class="author-name-text">Amogus</p>
            </div>
            <div class="bottom-side-of-post">
                <p class="title">Who is sus?</p>
                <p class="post-text">Mogus seams kinda sus</p>
            </div>
        </div>`;

    sideBar.after(div);
})

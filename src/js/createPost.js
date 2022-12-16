import { fishText } from 'https://unpkg.com/fish-text@2.0.1/fish-text.js';

const sideBar = document.querySelector(".sidebar")
const addPostElement = document.querySelector(".add-post-box")

let idNum = +localStorage.getItem("idNum") || 2

addPostElement.addEventListener('click', () => {

    let div = document.createElement('div');
    div.className = "post";

    idNum = (idNum + 1)
    localStorage.setItem("idNum", idNum)

    let authorName = fishText.getNames({count: 1, lang: 'rus', dataType: 'string', type: 'full'});
    let title = fishText.getRandomRangeWords({min: 1, max: 2, lang: 'rus', dataType: 'string', repeat: false});
    let textContent = fishText.getRandomRangeWords({min: 10, max: 30, lang: 'rus', dataType: 'string', repeat: false});

    console.log(textContent+"1")

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
                <p class="author-name-text">${authorName}</p>
            </div>
            <div class="bottom-side-of-post">
                <p class="title">${title}</p>
                <p class="post-text">${textContent}</p>
            </div>
        </div>`;

    let object = {
        id: idNum,
        author: authorName,
        title: title,
        text: textContent,
        rating: 0
    }

    let posts

    if (!localStorage.getItem("posts")) {
        posts = []
    }
    else {
       posts = JSON.parse(localStorage.getItem("posts"))
    }

    posts.push(object)

    localStorage.setItem("posts", JSON.stringify(posts))

    sideBar.after(div);
})

let posts

if (!localStorage.getItem("posts")) {
    posts = []
}
else {
    posts = JSON.parse(localStorage.getItem("posts"))
}

for (let i = 0; i < posts.length; i++) {
    console.log(posts[i])
    let count = posts[i].rating
    let authorName = posts[i].author
    let title = posts[i].title
    let id = posts[i].id
    let text = posts[i].text

    let div = document.createElement('div');
    div.className = "post";
    div.innerHTML = div.innerHTML = `<div class="counter">
            <button class="increaseCountIcon">
                <img
                        alt=""
                        src="../img/arrowUp.svg"
                        style="pointer-events: none;"
                />
            </button>
            <span id="${id}" class="counter-text">${count}</span>
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
                <p class="author-name-text">${authorName}</p>
            </div>
            <div class="bottom-side-of-post">
                <p class="title">${title}</p>
                <p class="post-text">${text}</p>
            </div>
        </div>`;

    sideBar.after(div);
}

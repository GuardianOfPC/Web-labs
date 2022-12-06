const sideBar = document.querySelector(".sidebar")
const addPostElement = document.querySelector(".add-post-box")

let idNum = +localStorage.getItem("idNum") || 2

addPostElement.addEventListener('click', () => {

    let div = document.createElement('div');
    div.className = "post";
    idNum = (idNum + 1)
    let randomNum = Math.random()
    let title = Math.random()
    localStorage.setItem("idNum", idNum)

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
                <p class="author-name-text">${randomNum}</p>
            </div>
            <div class="bottom-side-of-post">
                <p class="title">${title}</p>
                <p class="post-text">Mogus seams kinda sus</p>
            </div>
        </div>`;

    console.log(idNum)
    let postNum = `${idNum}.${idNum}`

    let object = {
        id: postNum,
        randomNum: randomNum,
        title: title,
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
console.log(posts)

for (let i = 0; i < posts.length; i++) {
    let count = posts[i].rating
    let randomNum = posts[i].randomNum
    let title = posts[i].title

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
            <span class="counter-text">${count}</span>
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
                <p class="author-name-text">${randomNum}</p>
            </div>
            <div class="bottom-side-of-post">
                <p class="title">${title}</p>
                <p class="post-text">Mogus seams kinda sus</p>
            </div>
        </div>`;

    sideBar.after(div);
}

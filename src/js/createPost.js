const sideBar = document.querySelector(".sidebar")
const addPostElement = document.querySelector(".add-post-box")

addPostElement.addEventListener('click', () => {

    let div = document.createElement('div');
    div.className = "post";
    div.innerHTML = "<div class=\"counter\">\n" +
        "            <button class=\"increaseCountIcon\">\n" +
        "                <img alt=\"\"\n" +
        "                     src=\"../img/arrowUp.svg\"\n" +
        "                />\n" +
        "            </button>\n" +
        "            <span class=\"counter-text\" data-createdAt=\"100\">10</span>\n" +
        "            <button class=\"decreaseCountIcon\">\n" +
        "                <img\n" +
        "                        alt=\"\"\n" +
        "                        src=\"../img/arrowDown.svg\"\n" +
        "                />\n" +
        "            </button>\n" +
        "        </div>\n" +
        "        <div class=\"post-box\">\n" +
        "            <div class=\"top-side-of-post\">\n" +
        "                <div class=\"avatar\"></div>\n" +
        "                <p class=\"author-name-text\">Mogus</p>\n" +
        "            </div>\n" +
        "            <div class=\"bottom-side-of-post\">\n" +
        "                <p class=\"title\">Who is REALLY sus?</p>\n" +
        "                <p class=\"post-text\">Amogus seams REALLY, REALLY sus</p>\n" +
        "            </div>\n" +
        "        </div>";

    sideBar.after(div);
})

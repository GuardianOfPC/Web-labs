document.addEventListener("click", (e) => {
    if (e.target.classList.contains("increaseCountIcon")) {
        let counterId = e.target.parentElement.querySelector(".counter-text").id


        if (+(counterId) === 1 || +(counterId) === 2) {
            let curValue = localStorage.getItem(counterId)

            if (!curValue) {
                let newValue = +(e.target.parentElement.querySelector(".counter-text").innerText) + 1
                e.target.parentElement.querySelector(".counter-text").innerText = newValue
                localStorage.setItem(e.target.parentElement.querySelector(".counter-text").id, newValue.toString())
            }

            let newValue = +curValue + 1

            e.target.parentElement.querySelector(".counter-text").innerText = newValue

            localStorage.setItem((+(e.target.parentElement.querySelector(".counter-text").id)).toString(), newValue.toString())

            return
        }

        let postsForCounters

        if (!localStorage.getItem("posts")) {
            postsForCounters = []
        }
        else {
            postsForCounters = JSON.parse(localStorage.getItem("posts"))
        }

        let newPosts = []

        postsForCounters.map((p) => {
            if (+(p.id) === +(counterId)) {


                p.rating = (+(p.rating) + 1).toString()
                e.target.parentElement.querySelector(".counter-text").innerText = p.rating
            }
            newPosts.push(p)
        })

        console.log(newPosts)

        localStorage.removeItem(postsForCounters)

        localStorage.setItem("posts", JSON.stringify(newPosts))
    }

    if (e.target.classList.contains("decreaseCountIcon")) {
        let counterId = e.target.parentElement.querySelector(".counter-text").id

        if (+(counterId) === 1 || +(counterId) === 2) {
            let curValue = localStorage.getItem(counterId)

            if (!curValue) {
                let newValue = +(e.target.parentElement.querySelector(".counter-text").innerText) - 1
                e.target.parentElement.querySelector(".counter-text").innerText = newValue
                localStorage.setItem(e.target.parentElement.querySelector(".counter-text").id, newValue.toString())
            }

            let newValue = +curValue - 1

            e.target.parentElement.querySelector(".counter-text").innerText = newValue

            localStorage.setItem(e.target.parentElement.querySelector(".counter-text").id, newValue.toString())

            return
        }

        let postsForCounters

        if (!localStorage.getItem("posts")) {
            postsForCounters = []
        }
        else {
            postsForCounters = JSON.parse(localStorage.getItem("posts"))
        }

        let newPosts = []

        postsForCounters.map((p) => {
            if (+(p.id) === +(counterId)) {


                p.rating = (+(p.rating) - 1).toString()
                e.target.parentElement.querySelector(".counter-text").innerText = p.rating
            }
            newPosts.push(p)
        })

        console.log(newPosts)

        localStorage.removeItem(postsForCounters)

        localStorage.setItem("posts", JSON.stringify(newPosts))
    }
});
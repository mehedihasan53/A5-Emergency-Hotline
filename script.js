
const navbarHeart = document.getElementById("navbar-heart")
const navbarCoin = document.getElementById("navbar-coin")
const navbarCopy = document.getElementById("navbar-copy")


const cardHeart = document.getElementsByClassName("card-heart")
const cards = document.getElementsByClassName("card")
const callHistory = document.getElementById("call-history")
const clearHistoryBtn = document.getElementsByClassName("clear-history")


for (const heart of cardHeart) {
    heart.addEventListener("click", function (e) {
        e.preventDefault()
    })
}
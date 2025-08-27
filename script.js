const counters = {
    heart: 0,
    coin: 100,
    copy: 0
};

// Navbar elements

const navbarHeart = document.getElementById("navbar-heart")
const navbarCoin = document.getElementById("navbar-coin")
const navbarCopy = document.getElementById("navbar-copy")
const callHistory = document.getElementById("call-history")
const clearBtn = document.getElementById("clear-history")

// Heart Buttons

const hearts = document.getElementsByClassName("card-heart")
for (const heart of hearts) {
    heart.addEventListener("click", function () {
        counters.heart++
        navbarHeart.innerHTML = counters.heart
    })
}

// Call Buttons

const callBtns = document.getElementsByClassName("card-call");
for (const callBtn of callBtns) {
    callBtn.addEventListener("click", function () {
        const card = callBtn.closest(".card")
        const serviceName = card
            .getElementsByTagName("h1")[0].innerText;

        const serviceNumber = card
            .getElementsByTagName("h1")[1].innerText;


        if (counters.coin < 20) {
            alert("You don't have enough coins")
            return;
        }
        alert("Calling " + serviceName + "(" + serviceNumber + ")");

        // navbar coin update
        counters.coin = counters.coin - 20;
        document.getElementById("navbar-coin").innerText = counters.coin

    })
}
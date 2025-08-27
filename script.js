const counters = {
    heart: 0,
    coin: 100,
    copy: 0
};

// Navbar elements

const navbarHeart = document.getElementById("navbar-heart")
const navbarCoin = document.getElementById("navbar-coin")
const navbarCopy = document.getElementById("navbar-copy")
const clearHistoryBtn = document.getElementById("clear-history")

const callHistoryList = document.getElementById("calls-history-items");


let callHistoryData = [];

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
        document.getElementById("navbar-coin").innerText = counters.coin;

        // ✅ 

        // Call History Time
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;

        //  create call history oject

        const callObj = {
            serviceName,
            serviceNumber,
            time: timeString
        };

        callHistoryData.push(callObj);

        updateCallHistoryUI();
    });
}

// clear button

clearHistoryBtn.addEventListener("click", function () {
    callHistoryData = [];
    updateCallHistoryUI();
});


// Copy Buttons
const copyBtns = document.getElementsByClassName("card-copy");

for (const btn of copyBtns) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const number = card.getElementsByTagName("h1")[1].innerText;
        navigator.clipboard.writeText(number);
        counters.copy++;
        navbarCopy.innerText = counters.copy;
    });
}


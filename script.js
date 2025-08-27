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


// call history update
function updateCallHistoryUI() {
    callHistoryList.innerHTML = "";

    if (callHistoryData.length === 0) {
        callHistoryList.innerHTML = `
            <div class="text-center text-gray-500 py-8">
            </div>
          `;
        return;
    }

    for (const call of callHistoryData) {
        const historyItem = document.createElement("div");
        historyItem.className = "call-history-list flex justify-between items-center p-4 mb-3 rounded-lg bg-[#FAFAFA]";
        historyItem.innerHTML = `
            <div class="service-history">
              <h1 class="font-semibold text-sm">${call.serviceName}</h1>
              <p class="text-[#5C5C5C]">${call.serviceNumber}</p>
            </div>
            <div class="date-time text-sm text-[#5C5C5C]">${call.time}</div>
          `;
        callHistoryList.appendChild(historyItem);
    }
}

// copy buttons

const copyBtns = document.getElementsByClassName("card-copy");

for (const btn of copyBtns) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const number = card.getElementsByTagName("h1")[1].innerText;

        navigator.clipboard.writeText(number).then(() => {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            btn.style.backgroundColor = '#00A63E';
            btn.style.color = 'white';

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 500);

            // Update counter
            counters.copy++;
            navbarCopy.innerText = counters.copy;
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy number to clipboard.')
        });

    });
}

updateCallHistoryUI();


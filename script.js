window.onload = function () {
    //Selezioni i pulsanti e le sezioni nel DOM
    const containerWeekOffers = document.getElementById("week-offers-sub");
    const buttonWeekOffers = document.getElementById("button-week-offers");

    const containerWelcomeSummer = document.getElementById("welcome-summer-sub");
    const buttonWelcomeSummer = document.getElementById("button-welcome-summer");

    const containerDailyOffer= document.getElementById("daily-offer-sub");
    const buttonDailyOffer = document.getElementById("button-daily-offer");

    const containerLastMinute = document.getElementById("last-minute-sub");
    const buttonLastMinute = document.getElementById("button-last-minute");

    //Click su week-offers

    function collaspeExpand(button, element) {
        button.addEventListener("click", function() {
            element.classList.toggle("collapsed");
            button.innerText = element.classList.contains("collapsed")
                ? "Expand this section"
                : "Collapse this section";
        });
    }

    collaspeExpand(buttonWeekOffers,containerWeekOffers)
    collaspeExpand(buttonWelcomeSummer,containerWelcomeSummer)
    collaspeExpand(buttonDailyOffer,containerDailyOffer)
    collaspeExpand(buttonLastMinute,containerLastMinute)

}
    

    /*
    buttonWeekOffers.addEventListener("click", function () {
        containerWeekOffers.classList.toggle("collapsed");
        buttonWeekOffers.innerText = containerWeekOffers.classList.contains(
            "collapsed"
        )
            ? "Expand this section"
            : "Collapse this section";
    });

    //Click su week-offers
    buttonWelcomeSummer.addEventListener("click", function () {
        containerWelcomeSummer.classList.toggle("collapsed");
        buttonWelcomeSummer.innerText = containerWelcomeSummer.classList.contains(
            "collapsed"
        )
            ? "Expand this section"
            : "Collapse this section";
    });

    
    //Click su daily-offer
    buttonDailyOffer.addEventListener("click", function () {
        containerDailyOffer.classList.toggle("collapsed");
        buttonDailyOffer.innerText = containerDailyOffer.classList.contains(
            "collapsed"
        )
            ? "Expand this section"
            : "Collapse this section";
    });

    
    //Click su last-minute
    buttonLastMinute.addEventListener("click", function () {
        containerLastMinute.classList.toggle("collapsed");
        buttonLastMinute.innerText = containerLastMinute.classList.contains(
            "collapsed"
        )
            ? "Expand this section"
            : "Collapse this section";
    });
}; */

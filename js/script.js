$("#exploreBtn").click(function(){

    $("html, body").animate({

        scrollTop: $(".featured-pgs").offset().top

    },1000);

});
document.getElementById("searchBtn").addEventListener("click", function () {

    let location = document.getElementById("location").value.toLowerCase();

    let cards = document.querySelectorAll(".pg-card");

    cards.forEach(card => {
        card.style.display = "none";
    });

    let selectedCards = document.querySelectorAll("." + location);

    selectedCards.forEach(card => {
        card.style.display = "block";
    });

});
const mobile_second_nav = document.getElementById("mobile_second_nav");
const mobile_nav_left_icon = document.getElementById("mobile_nav_left_icon");

mobile_nav_left_icon.addEventListener("click", function(e){
    mobile_second_nav.classList.toggle("showMobile_second_nav")
})
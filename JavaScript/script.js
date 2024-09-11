let menu = document.querySelector("header .menu .icon");
let nav = document.querySelector(".navigation");

let bar = '<ion-icon name="reorder-three-outline"></ion-icon>';
let menBar = 'three';
menu.addEventListener("click", () => {
    if (menBar == 'three') {
        menu.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
        menBar = 'close';
        nav.classList.add("display");
    } else {
        menu.innerHTML = '<ion-icon name="reorder-three-outline"></ion-icon>';
        menBar = 'three';
        nav.classList.remove("display");
    }
    
})


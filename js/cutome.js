



document.querySelector(".menu i").addEventListener("click", function(){
    document.querySelector(".navbar-menu ul").classList.toggle("top-menu");
});


document.querySelector(".close i").addEventListener("click", function(){
    document.querySelector(".navbar-menu ul").classList.toggle("top-menu");
});

document.querySelector(".menu i").addEventListener("click", function(){
    document.querySelector(".close i").style.display = "block";
    document.querySelector(".menu i").style.display = "none";
});

document.querySelector(".close i").addEventListener("click", function(){
    document.querySelector(".menu i").style.display = "block";
    document.querySelector(".close i").style.display = "none";
});




const menuItems = document.querySelectorAll(".navbar-menu li");

menuItems.forEach(item => {
    item.addEventListener("click", function() {
        // Remove 'active' class from all items
        menuItems.forEach(menu => menu.classList.remove("active"));
        // Add 'active' class to clicked item
        this.classList.add("active");
    });
});







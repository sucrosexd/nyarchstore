const menucontent = document.querySelector(".menumobile");
const menutoggle = document.querySelector(".menutoggle");
const mbtnname = document.querySelector(".menutoggle > span");
menutoggle.addEventListener("click", () => {
    menucontent.classList.toggle("show");
    mbtnname.innerHTML =(mbtnname.innerHTML === "☰") ? mbtnname.innerHTML = "×" : mbtnname.innerHTML = "☰";
});
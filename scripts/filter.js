const filtercontent = document.querySelector(".filters");
const filtertoggle = document.querySelector(".filterstoggle");
const buttonname = document.querySelector(".filterstoggle > span");
filtertoggle.addEventListener("click", () => {
    filtercontent.classList.toggle("show");
    buttonname.innerHTML =(buttonname.innerHTML === "Фильтры") ? buttonname.innerHTML = "Скрыть" : buttonname.innerHTML = "Фильтры";
});
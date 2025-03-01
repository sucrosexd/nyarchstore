const desccontent = document.querySelector(".moredesc");
const desctoggle = document.querySelector(".openmoredesc");
const btnname = document.querySelector(".openmoredesc > span");
desctoggle.addEventListener("click", () => {
    desccontent.classList.toggle("show");
    btnname.innerHTML =(btnname.innerHTML === "🠗 Узнать больше 🠗") ? btnname.innerHTML = "🠕 Скрыть 🠕" : btnname.innerHTML = "🠗 Узнать больше 🠗";
});
document.addEventListener("DOMContentLoaded", function () {
    const modalMenu = document.querySelector(".modal-menu");
    const openModalBtn = document.querySelector(".header-btn");
    const closeModalBtn = document.querySelector(".modal-close");

    if (!modalMenu || !openModalBtn || !closeModalBtn) {
        console.error("Не знайдено один або декілька потрібних елементів.");
        return;
    }

    // Відкриття модального вікна
    openModalBtn.addEventListener("click", function () {
        modalMenu.classList.add("is-open");
        document.body.style.overflow = "hidden"; // Заборона прокрутки сторінки під час відкритої модалки
    });

    // Закриття модального вікна
    closeModalBtn.addEventListener("click", function () {
        modalMenu.classList.remove("is-open");
        document.body.style.overflow = ""; // Відновлення прокрутки сторінки
    });

    // Закриття при кліці поза модальним вікном
    modalMenu.addEventListener("click", function (event) {
        if (event.target === modalMenu) {
            modalMenu.classList.remove("is-open");
            document.body.style.overflow = ""; 
        }
    });

    // Закриття модального вікна при натисканні клавіші Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modalMenu.classList.remove("is-open");
            document.body.style.overflow = ""; 
        }
    });
});

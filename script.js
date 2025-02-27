document.addEventListener("DOMContentLoaded", function () {
    const testimonios = document.querySelectorAll(".testimonio");
    let index = 0;

    function mostrarTestimonio() {
        testimonios.forEach((testimonio, i) => {
            testimonio.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % testimonios.length;
    }

    setInterval(mostrarTestimonio, 3000);
    mostrarTestimonio();
});


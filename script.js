document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("orderForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;
        const ciudad = document.getElementById("ciudad").value;
        const kit = document.getElementById("kit").value;
        
        if (nombre && correo && telefono && direccion && ciudad && kit) {
            alert("Pedido enviado con éxito. Nos pondremos en contacto contigo.");
            form.reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});

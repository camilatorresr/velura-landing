document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let kit = document.getElementById("kit").value;

    alert(`Gracias, ${nombre}. Hemos recibido tu pedido del ${kit}. Nos pondremos en contacto contigo pronto.`);
});

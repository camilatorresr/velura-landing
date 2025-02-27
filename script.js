document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let kit = document.getElementById("kit").value;

    let mensaje = `Hola, quiero pedir el *${kit.replace("_", " ")}* a nombre de ${nombre}. Mi número es: ${telefono}.`;
    
    let urlWhatsApp = `https://api.whatsapp.com/send?phone=57XXXXXXXXXX&text=${encodeURIComponent(mensaje)}`;
    
    window.location.href = urlWhatsApp;
});

document.addEventListener('DOMContentLoaded', function() {
    // Manejar el envío del formulario
    const form = document.getElementById('reservation-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Recopilar datos del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const kit = document.getElementById('kit').value;
            const notes = document.getElementById('notes').value;
            
            // Aquí puedes agregar la lógica para enviar los datos a un servidor
            // o procesar el pedido de alguna otra manera
            
            // Por ahora, mostremos un mensaje de confirmación
            alert(`¡Gracias por tu pedido, ${name}! \n\nHemos recibido tu solicitud para el ${document.getElementById('kit').options[document.getElementById('kit').selectedIndex].text}. \n\nNos pondremos en contacto contigo pronto al número ${phone} para confirmar los detalles de entrega.`);
            
            // Reiniciar el formulario
            form.reset();
        });
    }
    
    // Función para desplazamiento suave al hacer clic en enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

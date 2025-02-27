document.addEventListener('DOMContentLoaded', function() {
    // Formulario de reserva
    const form = document.getElementById('reservation-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const kit = document.getElementById('kit').value;
            const notes = document.getElementById('notes').value;
            
            // Validación básica
            if (!name || !email || !phone || !address || !kit) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Aquí podrías enviar los datos a tu servidor o servicio de correo
            // Por ahora, solo mostraremos un mensaje de confirmación
            alert(`¡Gracias por tu reserva, ${name}!\n\nHemos recibido tu pedido del ${getKitName(kit)}.\n\nTe contactaremos pronto al número ${phone} para confirmar la entrega.`);
            
            // Reiniciar el formulario
            form.reset();
        });
    }
    
    // Animación suave para los enlaces de navegación interna
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mostrar testimonios con animación
    const testimonials = document.querySelectorAll('.testimonial-card');
    
    // Función para comprobar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función para animar los testimonios cuando son visibles
    function animateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            if (isInViewport(testimonial)) {
                setTimeout(() => {
                    testimonial.style.opacity = "1";
                    testimonial.style.transform = "translateY(0)";
                }, index * 200);
            }
        });
    }
    
    // Inicializar estilos para la animación
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = "0";
        testimonial.style.transform = "translateY(20px)";
        testimonial.style.transition = "all 0.5s ease";
    });
    
    // Verificar visibilidad al cargar y al hacer scroll
    window.addEventListener('load', animateTestimonials);
    window.addEventListener('scroll', animateTestimonials);
    
    // Función para obtener el nombre del kit a partir de su valor
    function getKitName(kitValue) {
        const kits = {
            'extasis': 'Kit "Éxtasis Completo"',
            'esencia': 'Kit "Esencia Sensual"',
            'vibra': 'Kit "Vibra Intensa"',
            'aroma': 'Kit "Aroma de Pasión"'
        };
        
        return kits[kitValue] || 'Kit seleccionado';
    }
    
    // Contador de visitantes (simulado) - Solo para efectos de demostración
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount = parseInt(visitorCount) + 1;
    localStorage.setItem('visitorCount', visitorCount);
    
    // Efecto de resaltado para los precios
    const priceElements = document.querySelectorAll('.price-new');
    
    priceElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            this.style.color = var(--accent);
            this.style.transform = 'scale(1.1)';
        });
        
        element.addEventListener('mouseout', function() {
            this.style.color = var(--dark);
            this.style.transform = 'scale(1)';
        });
    });
});

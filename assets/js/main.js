// Detectar dispositivo para WhatsApp
document.addEventListener('DOMContentLoaded', function() {
const whatsappLink = document.getElementById('whatsapp-link');

  // Detectar si es móvil
const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    whatsappLink.href = 'whatsapp://send?phone=5218688947229';
    
    // Opcional: Añadir clase para estilos móviles
    whatsappLink.classList.add('is-mobile');
}

  // Animación de carga
const card = document.querySelector('.card');
card.style.opacity = '0';
card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
}, 100);

  // Trackeo de clicks (opcional)
const trackClick = (element, type) => {
    element.addEventListener('click', () => {
    console.log(`${type} clickeado`);
      // Aquí puedes añadir Google Analytics:
      // gtag('event', 'click', { 'event_category': 'contact', 'event_label': type });
    });
};

trackClick(whatsappLink, 'whatsapp');
trackClick(document.querySelector('.email-link'), 'email');
});
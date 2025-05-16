document.addEventListener('DOMContentLoaded', function() {
  // Detectar dispositivo para WhatsApp
  const whatsappLinks = document.querySelectorAll('.whatsapp-link, .whatsapp-float');
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    whatsappLinks.forEach(link => {
      link.href = 'whatsapp://send?phone=5218688947229';
    });
  }

  // Animación de carga
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);

  // Efectos especiales para el botón de WhatsApp
  const whatsappBtn = document.getElementById('whatsapp-float');
  
  // Efecto al pasar el mouse
  whatsappBtn.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    void this.offsetWidth; // Trigger reflow
    this.style.animation = 'bounce 0.8s, pulse 1.5s infinite';
    
    // Sonido opcional (descomentar si quieres)
    // new Audio('assets/sounds/pop.mp3').play();
  });
  
  // Efecto al hacer clic
  whatsappBtn.addEventListener('click', function(e) {
    // Efecto visual
    this.style.transform = 'scale(0.85)';
    setTimeout(() => {
      this.style.transform = 'scale(1.1)';
    }, 100);
    
    // Sonido opcional
    // new Audio('assets/sounds/click.mp3').play();
    
    // Opcional: Registrar en analytics
    console.log('WhatsApp clickeado desde: ' + (isMobile ? 'móvil' : 'desktop'));
  });
  
  // Efecto para móviles (touch)
  whatsappBtn.addEventListener('touchstart', function() {
    this.style.transform = 'scale(0.9)';
  });
  
  whatsappBtn.addEventListener('touchend', function() {
    this.style.transform = 'scale(1.1)';
  });
});
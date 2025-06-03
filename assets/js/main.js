document.addEventListener('DOMContentLoaded', function() {
    // Detectar dispositivo
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Configurar WhatsApp
    const whatsappLinks = document.querySelectorAll('.whatsapp-desktop-btn, .whatsapp-float');
    if (isMobile) {
        whatsappLinks.forEach(link => {
            link.href = 'whatsapp://send?phone=5218688947229';
        });
    }
    
    // Configurar teléfono
    const phoneLinks = document.querySelectorAll('.phone-link, .phone-desktop-btn');
    phoneLinks.forEach(link => {
        link.href = isMobile ? 'tel:8688252222' : 'tel:+528688252222';
        
        link.addEventListener('click', function() {
            if (isMobile) {
                console.log('Iniciando llamada...');
            } else {
                console.log('Número mostrado para desktop');
            }
        });
    });
    
    // Configurar correo electrónico
    const emailLinks = document.querySelectorAll('.email-link, .email-desktop-btn');
    emailLinks.forEach(link => {
        link.href = 'mailto:oficina@andesa.mx?subject=Consulta%20a%20ANDESA&body=Hola,%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.';
        
        link.addEventListener('click', function(e) {
            if (!this.href.includes('mailto:')) {
                e.preventDefault();
                window.location.href = 'mailto:oficina@andesa.mx?subject=Consulta%20a%20ANDESA&body=Hola,%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.';
            }
        });
    });
    
    // Configurar botones de desktop
    const phoneDesktopBtn = document.querySelector('.phone-desktop-btn');
    if (phoneDesktopBtn) {
        phoneDesktopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        phoneDesktopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    const emailDesktopBtn = document.querySelector('.email-desktop-btn');
    if (emailDesktopBtn) {
        emailDesktopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        emailDesktopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    const whatsappDesktopBtn = document.getElementById('whatsapp-desktop');
    if (whatsappDesktopBtn) {
        whatsappDesktopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        whatsappDesktopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    }
    
    const mapDesktopBtn = document.querySelector('.map-desktop-btn');
    if (mapDesktopBtn) {
        mapDesktopBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        mapDesktopBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Animación de carga de la tarjeta
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Efectos para el botón flotante de WhatsApp (solo móvil)
    const whatsappFloat = document.getElementById('whatsapp-float');
    if (whatsappFloat && isMobile) {
        whatsappFloat.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            void this.offsetWidth;
            this.style.animation = 'bounce 0.8s, pulse 1.5s infinite';
        });
        
        whatsappFloat.addEventListener('click', function() {
            this.style.transform = 'scale(0.85)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 100);
        });
        
        whatsappFloat.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.9)';
        });
        
        whatsappFloat.addEventListener('touchend', function() {
            this.style.transform = 'scale(1.1)';
        });
    }
    
    // Activar animaciones pasivas más fuertes
    const buttons = document.querySelectorAll('.phone-desktop-btn, .email-desktop-btn, .whatsapp-desktop-btn, .map-desktop-btn');
    
    function triggerStrongAnimation(button) {
        button.style.animation = 'none';
        void button.offsetWidth;
        button.style.animation = 'dramatic-pulse 1s, color-pulse 1.5s';
        
        // Resplandor más intenso
        const glow = document.createElement('div');
        glow.className = 'temp-glow';
        button.appendChild(glow);
        
        setTimeout(() => {
            glow.remove();
        }, 1000);
    }
    
    // Activar animaciones cada 5 segundos
    setInterval(() => {
        buttons.forEach((button, index) => {
            setTimeout(() => {
                triggerStrongAnimation(button);
            }, index * 800);
        });
    }, 5000);
});
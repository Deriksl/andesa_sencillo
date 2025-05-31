document.addEventListener('DOMContentLoaded', function() {
    // Detectar dispositivo
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Configurar WhatsApp
    const whatsappLinks = document.querySelectorAll('.whatsapp-link, .whatsapp-float, .whatsapp-desktop-btn');
    if (isMobile) {
        whatsappLinks.forEach(link => {
            link.href = 'whatsapp://send?phone=5218688947229';
        });
    }
    
    // Configurar teléfono
    const phoneLinks = document.querySelectorAll('.phone-link, .phone-desktop-btn');
    phoneLinks.forEach(link => {
        link.href = isMobile ? 'tel:8688252222' : 'tel:+528688252222';
        
        // Efecto al hacer clic
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
        link.href = 'mailto:oficina@andesa.mx?subject=Consulta%20a%20ANDESA&body=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.';
        
        link.addEventListener('click', function(e) {
            if (!this.href.includes('mailto:')) {
                e.preventDefault();
                window.location.href = 'mailto:oficina@andesa.mx?subject=Consulta%20a%20ANDESA&body=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20sus%20servicios.';
            }
        });
    });
    
    // Animación para el enlace de mapa
    const mapLink = document.getElementById('map-link');
    if (mapLink) {
        mapLink.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.map-icon');
            if (icon) icon.style.animation = 'map-pulse 1.5s infinite';
        });
        
        mapLink.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.map-icon');
            if (icon) icon.style.animation = 'none';
        });
    }
    
    // Configurar botones de desktop
    if (!isMobile) {
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
});
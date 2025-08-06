document.addEventListener('DOMContentLoaded', function() {
    // Detectar dispositivo
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Configurar WhatsApp con el nuevo número
    const whatsappLinks = document.querySelectorAll('.whatsapp-desktop-btn, .whatsapp-float');
    if (isMobile) {
        whatsappLinks.forEach(link => {
            link.href = 'whatsapp://send?phone=5218681323331';
        });
    }
    
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
    
    // Efectos para el botón flotante de WhatsApp
    const whatsappFloat = document.getElementById('whatsapp-float');
    if (whatsappFloat) {
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
        
        if (isMobile) {
            whatsappFloat.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.9)';
            });
            
            whatsappFloat.addEventListener('touchend', function() {
                this.style.transform = 'scale(1.1)';
            });
        }
    }
    
    // Activar animaciones pasivas
    const buttons = document.querySelectorAll('.email-desktop-btn, .whatsapp-desktop-btn');
    
    function triggerStrongAnimation(button) {
        button.style.animation = 'none';
        void button.offsetWidth;
        button.style.animation = 'dramatic-pulse 1s, color-pulse 1.5s';
        
        const glow = document.createElement('div');
        glow.className = 'temp-glow';
        button.appendChild(glow);
        
        setTimeout(() => {
            glow.remove();
        }, 1000);
    }
    
    setInterval(() => {
        buttons.forEach((button, index) => {
            setTimeout(() => {
                triggerStrongAnimation(button);
            }, index * 800);
        });
    }, 5000);
});
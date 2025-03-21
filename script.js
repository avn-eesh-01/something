// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration for background particles
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#ff5f6d', '#ffc371', '#6c5ce7', '#ecf0f1']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff5f6d',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'bubble'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 250,
                    size: 6,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Timeline animations with GSAP
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                end: 'top 60%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Wish cards animation
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, index) => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 65%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Gallery items animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        gsap.from(item, {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'top 65%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Message section animation
    gsap.from('.message-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.message-content',
            start: 'top 80%',
            end: 'top 60%',
            toggleActions: 'play none none none'
        }
    });

    // Interactive flame animation on hover
    const candle = document.querySelector('.candle');
    if (candle) {
        candle.addEventListener('mouseenter', function() {
            gsap.to('.flame', {
                height: 40,
                width: 20,
                duration: 0.5,
                boxShadow: '0 0 20px #ff9800, 0 0 40px #ff9800, 0 0 60px #ff9800, 0 0 80px #ff9800'
            });
        });
        
        candle.addEventListener('mouseleave', function() {
            gsap.to('.flame', {
                height: 30,
                width: 15,
                duration: 0.5,
                boxShadow: '0 0 10px #ff9800, 0 0 20px #ff9800, 0 0 30px #ff9800, 0 0 40px #ff9800'
            });
        });
    }

    // Celebrate button - confetti effect
    const celebrateBtn = document.getElementById('celebrateBtn');
    if (celebrateBtn) {
        celebrateBtn.addEventListener('click', function() {
            // Play celebration sound if available
            // const audio = new Audio('path/to/celebration.mp3');
            // audio.play();
            
            // Trigger confetti
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            
            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }
            
            (function frame() {
                const timeLeft = animationEnd - Date.now();
                
                if (timeLeft <= 0) {
                    return;
                }
                
                const particleCount = 50 * (timeLeft / duration);
                
                // Confetti options
                confetti({
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
                    colors: ['#ff5f6d', '#ffc371', '#6c5ce7', '#2ecc71', '#3498db'],
                    shapes: ['square', 'circle'],
                    gravity: randomInRange(0.4, 0.6),
                    scalar: randomInRange(0.8, 1.2),
                    drift: randomInRange(-0.2, 0.2)
                });
                
                requestAnimationFrame(frame);
            }());
            
            // Vibrate if available
            if (navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
            }
            
            // Bounce all elements with animation
            const animateElements = document.querySelectorAll('.hero h1, .name-text, .cake');
            animateElements.forEach(el => {
                gsap.to(el, {
                    keyframes: [
                        { scale: 1.1, duration: 0.2 },
                        { scale: 1, duration: 0.2 },
                        { scale: 1.05, duration: 0.2 },
                        { scale: 1, duration: 0.2 }
                    ]
                });
            });
        });
    }

    // Option to personalize the friend's name
    const nameElement = document.querySelector('.name-text');
    if (nameElement) {
        nameElement.addEventListener('click', function() {
            const currentName = this.textContent;
            const newName = prompt('Enter your friend\'s name:', currentName);
            if (newName && newName.trim() !== '') {
                this.textContent = newName.trim();
                // Save to localStorage if needed
                localStorage.setItem('friendName', newName.trim());
            }
        });

        // Load saved name if available
        const savedName = localStorage.getItem('friendName');
        if (savedName) {
            nameElement.textContent = savedName;
        }
    }

    // Hidden messages functionality
    const hiddenMessage = document.querySelector('.hidden-message');
    const hiddenMessageTrigger = document.querySelector('.hidden-message-trigger');
    const secretMessageContainer = document.querySelector('.secret-message-container');
    const closeBtn = document.querySelector('.close-btn');
    
    // Create toast message element
    const createToast = (message) => {
        // Remove any existing toast
        const existingToast = document.querySelector('.toast-message');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    };
    
    // Function to show secret message
    const showSecretMessage = () => {
        secretMessageContainer.classList.add('active');
        // Play a soft chime sound
        const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magic-tone-alert-2993.mp3');
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio play failed:', e));
    };
    
    // Hide secret message
    const hideSecretMessage = () => {
        secretMessageContainer.classList.remove('active');
    };
    
    // Event listeners for hidden messages
    if (hiddenMessage) {
        hiddenMessage.addEventListener('click', showSecretMessage);
    }
    
    if (hiddenMessageTrigger) {
        hiddenMessageTrigger.addEventListener('click', showSecretMessage);
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideSecretMessage);
    }
    
    // Close modal if clicking outside
    secretMessageContainer.addEventListener('click', function(e) {
        if (e.target === this) {
            hideSecretMessage();
        }
    });
    
    // Easter eggs
    const easterEggs = document.querySelectorAll('.easter-eggs .egg');
    easterEggs.forEach(egg => {
        egg.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            createToast(message);
            
            // Add some sparkles around the egg
            const sparkles = 5;
            for (let i = 0; i < sparkles; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.position = 'absolute';
                sparkle.style.top = `${Math.random() * 100 - 50}px`;
                sparkle.style.left = `${Math.random() * 100 - 50}px`;
                sparkle.style.transformOrigin = 'center';
                sparkle.style.zIndex = '1000';
                sparkle.innerHTML = '✨';
                sparkle.style.animation = `sparkleAnimation 1s forwards`;
                this.appendChild(sparkle);
                
                // Remove sparkle after animation
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }
        });
    });
    
    // Create a keycode easter egg (type "HAPPY" on keyboard)
    let keysPressed = [];
    const secretCode = ['H', 'A', 'P', 'P', 'Y'];
    
    document.addEventListener('keydown', function(e) {
        // Get the key pressed
        const key = e.key.toUpperCase();
        
        // Add the key to the array
        keysPressed.push(key);
        
        // Keep only the last 5 keys pressed
        keysPressed = keysPressed.slice(-secretCode.length);
        
        // Check if the array matches the secret code
        if (keysPressed.join('') === secretCode.join('')) {
            // Create magical effect all over the screen
            for (let i = 0; i < 20; i++) {
                const randomEmoji = ['🎂', '🎁', '🎈', '🎉', '✨', '💖', '🌟'][Math.floor(Math.random() * 7)];
                createRandomEmoji(randomEmoji);
            }
            
            createToast('You found the secret keyboard code! 🎉');
        }
    });
    
    // Create random emoji animation
    function createRandomEmoji(emoji) {
        const element = document.createElement('div');
        element.innerText = emoji;
        element.style.position = 'fixed';
        element.style.left = Math.random() * 100 + 'vw';
        element.style.top = Math.random() * 100 + 'vh';
        element.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        element.style.transform = 'translateY(0px)';
        element.style.opacity = '1';
        element.style.transition = 'all 2s ease';
        element.style.zIndex = '1000';
        
        document.body.appendChild(element);
        
        setTimeout(() => {
            element.style.transform = `translateY(-100px) rotate(${Math.random() * 360}deg)`;
            element.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            element.remove();
        }, 2100);
    }

    // Add a hidden hover effect to the cake
    const cakeElement = document.querySelector('.cake');
    if (cakeElement) {
        let clickCount = 0;
        cakeElement.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 3) {
                // After 3 clicks, show a hidden message
                createToast('You found a hidden wish inside the cake! 🍰 "May your year be as sweet as cake!"');
                clickCount = 0;
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add floating animation to cake
    gsap.to('.cake-container', {
        y: '-15px',
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    });
});

// Add a 3D tilt effect to polaroid images using mousemove
document.addEventListener('mousemove', function(e) {
    const polaroids = document.querySelectorAll('.polaroid');
    
    polaroids.forEach(polaroid => {
        const rect = polaroid.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            polaroid.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        } else {
            // Reset transform when mouse is not over the polaroid
            polaroid.style.transform = `rotate(var(--rotation))`;
        }
    });
}); 
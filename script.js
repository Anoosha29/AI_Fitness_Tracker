
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Sticky Header
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Sticky CTA Button - Only for desktop
        const stickyCta = document.getElementById('stickyCta');
        if (window.innerWidth > 768) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    stickyCta.classList.add('show');
                } else {
                    stickyCta.classList.remove('show');
                }
            });
        }

        // Scroll Animation
        const animateOnScroll = () => {
            const elements = document.querySelectorAll(
                '.feature-card, .calculator-container, .progress-container, ' +
                '.testimonial-card, .cta-container'
            );
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('animated');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // BMI Calculator
        const calculateBmi = document.getElementById('calculateBmi');
        const bmiResult = document.getElementById('bmiResult');
        const bmiValue = document.getElementById('bmiValue');
        const bmiCategory = document.getElementById('bmiCategory');

        calculateBmi.addEventListener('click', () => {
            const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
            const weight = parseFloat(document.getElementById('weight').value);
            
            if (height && weight) {
                const bmi = (weight / (height * height)).toFixed(1);
                bmiValue.textContent = bmi;
                
                let category = '';
                let color = '';
                
                if (bmi < 18.5) {
                    category = 'Underweight';
                    color = 'var(--primary-light)';
                } else if (bmi >= 18.5 && bmi < 25) {
                    category = 'Healthy Weight';
                    color = 'var(--success)';
                } else if (bmi >= 25 && bmi < 30) {
                    category = 'Overweight';
                    color = 'var(--accent)';
                } else {
                    category = 'Obese';
                    color = '#ff4757';
                }
                
                bmiCategory.textContent = category;
                bmiCategory.style.color = color;
                bmiResult.style.display = 'block';
                
                // Animate the BMI value
                bmiValue.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    bmiValue.style.transform = 'scale(1)';
                }, 300);
            } else {
                alert('Please enter both height and weight.');
            }
        });

        // Animate Progress Bars
        function animateProgressBars() {
            // Set random values for demo purposes
            const caloriesPercent = Math.min(100, Math.floor(Math.random() * 100));
            const proteinPercent = Math.min(100, Math.floor(Math.random() * 100));
            const carbsPercent = Math.min(100, Math.floor(Math.random() * 100));
            const fatsPercent = Math.min(100, Math.floor(Math.random() * 100));
            
            // Update progress fills
            document.getElementById('caloriesFill').style.width = `${caloriesPercent}%`;
            document.getElementById('proteinFill').style.width = `${proteinPercent}%`;
            document.getElementById('carbsFill').style.width = `${carbsPercent}%`;
            document.getElementById('fatsFill').style.width = `${fatsPercent}%`;
            
            // Update values text
            document.getElementById('caloriesValue').textContent = 
                `${Math.round(2000 * caloriesPercent / 100)}/2000 kcal`;
            document.getElementById('proteinValue').textContent = 
                `${Math.round(150 * proteinPercent / 100)}/150g`;
            document.getElementById('carbsValue').textContent = 
                `${Math.round(250 * carbsPercent / 100)}/250g`;
            document.getElementById('fatsValue').textContent = 
                `${Math.round(70 * fatsPercent / 100)}/70g`;
        }

        // Initialize progress bars with animation
        setTimeout(() => {
            animateProgressBars();
            
            // Update progress bars every 5 seconds for demo
            setInterval(animateProgressBars, 5000);
        }, 1000);

        // Particles.js Configuration
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#4895ef"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#4895ef",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            // Reset mobile menu if resizing to desktop
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

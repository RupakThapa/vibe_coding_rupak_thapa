/**
 * Simple Particle Engine for Disco Mode
 */
const ParticleEngine = {
    canvas: null,
    ctx: null,
    particles: [],
    animationId: null,
    isActive: false,

    init: function () {
        if (this.isActive) return;

        // Create canvas if it doesn't exist
        if (!document.getElementById('disco-particles')) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'disco-particles';
            this.canvas.style.position = 'fixed';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            this.canvas.style.pointerEvents = 'none'; // Let clicks pass through
            this.canvas.style.zIndex = '0'; // Behind everything
            document.body.prepend(this.canvas);

            this.ctx = this.canvas.getContext('2d');

            // Handle resize
            window.addEventListener('resize', () => this.resize());
        } else {
            this.canvas = document.getElementById('disco-particles');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.style.display = 'block';
        }

        this.isActive = true;
        this.resize();
        this.createParticles();
        this.animate();
    },

    destroy: function () {
        this.isActive = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.canvas) {
            this.canvas.style.display = 'none';
        }
        this.particles = [];
    },

    resize: function () {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    createParticles: function () {
        const particleCount = Math.min(100, (window.innerWidth * window.innerHeight) / 10000);
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                color: `hsl(${Math.random() * 360}, 70%, 50%)`
            });
        }
    },

    animate: function () {
        if (!this.isActive) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw and update particles
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off walls
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Draw
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
        });

        // Mouse interaction (simple repulsion)
        // Note: To make this work, we'd need to track mouse position globally

        this.animationId = requestAnimationFrame(() => this.animate());
    }
};

// Expose to window for _main.js to access
window.ParticleEngine = ParticleEngine;

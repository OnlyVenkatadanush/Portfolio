import { useEffect, useRef } from 'react';
import './NeuralBackground.css';

export default function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Mouse coordinates (gentle cursor reaction)
    const mouse = { x: -2000, y: -2000, radius: 140, active: false };

    // Palette: soft translucent white, delicate light champagne gold
    const neuronColors = [
      { core: 'rgba(255, 255, 255, 0.75)', glow: 'rgba(255, 255, 255, 0.4)' },
      { core: 'rgba(254, 240, 138, 0.75)', glow: 'rgba(254, 240, 138, 0.45)' },
      { core: 'rgba(243, 207, 122, 0.8)', glow: 'rgba(243, 207, 122, 0.5)' },
    ];

    // Minimalist neuron count: ~35 to 45 nodes across the entire page
    const count = Math.min(Math.max(Math.floor((width * height) / 28000), 28), 46);
    const neurons = [];
    const pulses = [];

    class Neuron {
      constructor(isHub = Math.random() < 0.1) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.isHub = isHub;
        this.radius = isHub ? Math.random() * 0.8 + 2.0 : Math.random() * 0.7 + 1.0;
        this.colorObj = neuronColors[Math.floor(Math.random() * neuronColors.length)];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.pulse += this.pulseSpeed;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.9;
            this.x -= (dx / dist) * force;
            this.y -= (dy / dist) * force;
          }
        }
      }

      draw() {
        const pulseEffect = Math.sin(this.pulse) * 0.2 + 0.9;
        const r = this.radius * pulseEffect;

        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = this.colorObj.core;
        ctx.shadowBlur = this.isHub ? 6 : 3;
        ctx.shadowColor = this.colorObj.glow;
        ctx.fill();
        ctx.restore();
      }
    }

    // Rare, delicate synaptic signals
    class SynapticPulse {
      constructor(from, to, color) {
        this.from = from;
        this.to = to;
        this.color = color;
        this.progress = 0;
        this.speed = Math.random() * 0.015 + 0.01;
      }

      update() {
        this.progress += this.speed;
        return this.progress < 1;
      }

      draw() {
        const px = this.from.x + (this.to.x - this.from.x) * this.progress;
        const py = this.from.y + (this.to.y - this.from.y) * this.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < count; i++) {
      neurons.push(new Neuron());
    }

    let pulseTimer = 0;

    const renderConnections = () => {
      const maxDistance = 125; // Smaller reach = cleaner, airy network

      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Subtle, non-intrusive hairline opacity
            const alpha = Math.pow(1 - dist / maxDistance, 1.8) * 0.22;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);

            if ((i + j) % 2 === 0) {
              ctx.strokeStyle = `rgba(243, 207, 122, ${alpha * 1.1})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
            }

            ctx.lineWidth = 0.55; // Thin, elegant lines
            ctx.stroke();
            ctx.restore();

            pulseTimer++;
            if (pulseTimer > 550 && pulses.length < 5) {
              pulseTimer = 0;
              pulses.push(
                new SynapticPulse(
                  neurons[i],
                  neurons[j],
                  neurons[i].isHub ? '#fef08a' : '#ffffff'
                )
              );
            }
          }
        }

        // Subtle mouse connection
        if (mouse.active) {
          const mdx = neurons[i].x - mouse.x;
          const mdy = neurons[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouse.radius) {
            const mAlpha = (1 - mdist / mouse.radius) * 0.35;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(243, 207, 122, ${mAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleWindowResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      renderConnections();

      for (let p = pulses.length - 1; p >= 0; p--) {
        const alive = pulses[p].update();
        if (alive) {
          pulses[p].draw();
        } else {
          pulses.splice(p, 1);
        }
      }

      for (let i = 0; i < neurons.length; i++) {
        neurons[i].update();
        neurons[i].draw();
      }

      if (mouse.active) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fef08a';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#f3cf7a';
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="neural-bg" aria-hidden="true">
      <div className="neural-bg__grid" />
      <div className="neural-bg__gold-nebula" />
      <canvas ref={canvasRef} className="neural-bg__canvas" />
    </div>
  );
}

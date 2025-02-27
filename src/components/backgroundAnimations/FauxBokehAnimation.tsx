import React, { useRef, useEffect } from 'react';
import { gsap, Expo } from 'gsap';

interface AnimateOptions {
  density: number;
  speed: number;
  sync: boolean;
  distance: number;
  lineColor: string;
  circleColor: string;
  radius: number;
  lineWidth: number;
  lines: number;
  updateClosest: boolean;
  mouse: boolean;
}

class Point {
  id: number;
  ctx: CanvasRenderingContext2D;
  position: { x: number; y: number };
  origin: { x: number; y: number };
  opacity: number = 0;
  closest: Point[] = [];
  options: AnimateOptions;
  circle: Circle | null = null;

  constructor(position: { x: number; y: number }, ctx: CanvasRenderingContext2D, id: number, options: AnimateOptions) {
    this.position = position;
    this.origin = { ...position };
    this.ctx = ctx;
    this.id = id;
    this.options = options;
  }

  distanceTo(point: { position: { x: number; y: number } }, abs = false) {
    const dx = this.position.x - point.position.x;
    const dy = this.position.y - point.position.y;
    const distance = dx * dx + dy * dy;
    return abs ? Math.abs(distance) : distance;
  }

  drawLines() {
    for (let i = 0; i < this.closest.length; i++) {
      if (this.opacity > 0) {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = `rgba(${this.options.lineColor}, ${this.opacity})`;
        this.ctx.lineWidth = this.options.lineWidth;
        this.ctx.lineTo(this.closest[i].position.x, this.closest[i].position.y);
        this.ctx.stroke();
      }
    }
  }

  shift() {
    // Randomize speed a little if not in sync
    let speed = this.options.speed;
    if (!this.options.sync) {
      speed -= this.options.speed * Math.random();
    }
    gsap.to(this.position, {
      duration: speed,
      x: this.origin.x - this.options.distance / 2 + Math.random() * this.options.distance,
      y: this.origin.y - this.options.distance / 2 + Math.random() * this.options.distance,
      ease: Expo.easeInOut,
      onComplete: () => this.shift(),
    });
  }
}

class Circle {
  point: Point;
  ctx: CanvasRenderingContext2D;
  options: AnimateOptions;
  opacity: number = 0;

  constructor(point: Point, ctx: CanvasRenderingContext2D, options: AnimateOptions) {
    this.point = point;
    this.ctx = ctx;
    this.options = options;
  }

  draw() {
    if (this.opacity > 0) {
      this.ctx.beginPath();
      this.ctx.arc(this.point.position.x, this.point.position.y, this.options.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = `rgba(${this.options.circleColor}, ${this.opacity})`;
      this.ctx.fill();
    }
  }
}

class Animate {
  canvas: HTMLCanvasElement;
  options: AnimateOptions;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  target: { position: { x: number; y: number } } = { position: { x: this.width / 2, y: this.height / 2 } };
  ctx: CanvasRenderingContext2D;
  points: Point[] = [];
  animationFrameId: number = 0;

  defaultOptions: AnimateOptions = {
    density: 10,
    speed: 10,
    sync: false,
    distance: 100,
    lineColor: '255, 255, 255',
    circleColor: '255, 255, 255',
    radius: 20,
    lineWidth: 1,
    lines: 3,
    updateClosest: false,
    mouse: true,
  };

  constructor(canvas: HTMLCanvasElement, options?: Partial<AnimateOptions>) {
    this.canvas = canvas;
    this.options = { ...this.defaultOptions, ...options };
    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get canvas 2D context');
    this.ctx = ctx;
    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));

    if (this.options.mouse && !('ontouchstart' in window)) {
      window.addEventListener('mousemove', this.mousemove.bind(this));
    }

    // Create points
    for (let x = 0; x < this.width; x += this.width / this.options.density) {
      for (let y = 0; y < this.height; y += this.height / this.options.density) {
        const point = new Point(
          {
            x: x + Math.random() * this.width / this.options.density,
            y: y + Math.random() * this.height / this.options.density,
          },
          this.ctx,
          this.points.length + 1,
          this.options
        );
        this.points.push(point);
      }
    }

    // Create circles for each point
    this.points.forEach((point) => {
      point.circle = new Circle(point, this.ctx, this.options);
    });

    this.findClosest();
    this.animate();
    this.shiftPoints();

    if (!this.options.mouse) {
      this.moveTarget();
    }
  }

  findClosest() {
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      point.closest = [];
      for (let j = 0; j < this.points.length; j++) {
        const testPoint = this.points[j];
        if (point.id !== testPoint.id) {
          // If we don't have enough closest points yet, add directly
          if (point.closest.length < this.options.lines) {
            point.closest.push(testPoint);
          } else {
            // Find if testPoint is closer than any of the current ones
            for (let k = 0; k < point.closest.length; k++) {
              if (point.distanceTo(testPoint) < point.distanceTo(point.closest[k])) {
                point.closest[k] = testPoint;
                break;
              }
            }
          }
        }
      }
    }
  }

  animate() {
    if (this.options.updateClosest) {
      this.findClosest();
    }

    // Update opacity based on distance to target
    this.points.forEach((point) => {
      const d = point.distanceTo(this.target, true);
      if (d < 5000) {
        point.opacity = 0.4;
        if (point.circle) point.circle.opacity = 0.6;
      } else if (d < 10000) {
        point.opacity = 0.2;
        if (point.circle) point.circle.opacity = 0.3;
      } else if (d < 30000) {
        point.opacity = 0.1;
        if (point.circle) point.circle.opacity = 0.2;
      } else {
        point.opacity = 0.05;
        if (point.circle) point.circle.opacity = 0.05;
      }
    });

    // Clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);
    // Draw points
    this.points.forEach((point) => {
      point.drawLines();
      if (point.circle) point.circle.draw();
    });

    this.animationFrameId = window.requestAnimationFrame(this.animate.bind(this));
  }

  shiftPoints() {
    this.points.forEach((point) => point.shift());
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  mousemove(event: MouseEvent) {
    if (event.pageX || event.pageY) {
      this.target.position.x = event.pageX;
      this.target.position.y = event.pageY;
    } else {
      this.target.position.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      this.target.position.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
  }

  moveTarget() {
    gsap.to(this.target.position, {
      duration: 2,
      x: Math.random() * (this.width - 200) + 100,
      y: Math.random() * (this.height - 200) + 100,
      ease: Expo.easeInOut,
      onComplete: () => this.moveTarget(),
    });
  }

  // Clean up event listeners and animation frames
  destroy() {
    window.removeEventListener('resize', this.resize.bind(this));
    window.removeEventListener('mousemove', this.mousemove.bind(this));
    window.cancelAnimationFrame(this.animationFrameId);
    gsap.killTweensOf(this.target.position);
    this.points.forEach((point) => gsap.killTweensOf(point.position));
  }
}

const FauxBokeh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animateInstance = useRef<Animate>();

  useEffect(() => {
    if (canvasRef.current) {
      animateInstance.current = new Animate(canvasRef.current);
    }
    return () => {
      if (animateInstance.current) {
        animateInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <h1 className="fixed top-2 left-2 text-white text-xl tracking-widest z-50">Faux Bokeh</h1>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default FauxBokeh;

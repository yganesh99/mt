'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedWaveform() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas dimensions
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Wave properties
		const waves = [
			{
				amplitude: 25,
				period: 0.04,
				speed: 0.015,
				color: '#ED5C2D',
				opacity: 0.2,
			},
			{
				amplitude: 20,
				period: 0.03,
				speed: 0.02,
				color: '#FEF61D',
				opacity: 0.15,
			},
			{
				amplitude: 15,
				period: 0.05,
				speed: 0.01,
				color: '#ED5C2D',
				opacity: 0.1,
			},
		];

		let animationFrameId;
		let time = 0;

		const animate = () => {
			time += 0.05;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			waves.forEach((wave) => {
				drawWave(ctx, wave, time);
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		const drawWave = (ctx, wave, time) => {
			const { amplitude, period, speed, color, opacity } = wave;

			ctx.beginPath();
			ctx.moveTo(0, canvas.height / 2);

			for (let x = 0; x < canvas.width; x++) {
				const y =
					Math.sin(x * period + time * speed) * amplitude +
					canvas.height / 2;
				ctx.lineTo(x, y);
			}

			ctx.lineTo(canvas.width, canvas.height);
			ctx.lineTo(0, canvas.height);
			ctx.closePath();

			ctx.fillStyle = `${color}${Math.floor(opacity * 255)
				.toString(16)
				.padStart(2, '0')}`;
			ctx.fill();
		};
		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className='absolute inset-0 w-full h-full'
		/>
	);
}

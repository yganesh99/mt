'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
	Play,
	Pause,
	Volume2,
	SkipBack,
	SkipForward,
	Calendar,
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function PodcastPlayer({
	title,
	description,
	duration,
	date,
	imageUrl,
}) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const progressInterval = useRef(null);

	useEffect(() => {
		if (isPlaying) {
			progressInterval.current = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) {
						clearInterval(progressInterval.current);
						setIsPlaying(false);
						return 0;
					}
					return prev + 0.5;
				});
			}, 500);
		} else if (progressInterval.current) {
			clearInterval(progressInterval.current);
		}

		return () => {
			if (progressInterval.current) {
				clearInterval(progressInterval.current);
			}
		};
	}, [isPlaying]);

	const togglePlayback = () => {
		setIsPlaying(!isPlaying);
	};

	const formatTime = (percentage) => {
		// Convert percentage to seconds based on duration (e.g., "48:32")
		const [minutes, seconds] = duration.split(':');
		const totalSeconds =
			Number.parseInt(minutes) * 60 + Number.parseInt(seconds);
		const currentSeconds = Math.floor((percentage / 100) * totalSeconds);

		const displayMinutes = Math.floor(currentSeconds / 60);
		const displaySeconds = currentSeconds % 60;

		return `${displayMinutes}:${displaySeconds
			.toString()
			.padStart(2, '0')}`;
	};

	return (
		<div className='overflow-hidden bg-background rounded-xl shadow-lg'>
			<div className='grid gap-6 p-6 md:grid-cols-3'>
				<div className='relative aspect-square md:col-span-1'>
					<div
						className={cn(
							'absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary opacity-20',
							isPlaying && 'animate-pulse'
						)}
					></div>
					<Image
						src={imageUrl || '/placeholder.svg'}
						alt={title}
						width={400}
						height={400}
						className='object-contain w-full h-full rounded-lg'
						// className='object-cover w-full h-full rounded-lg'
					/>
				</div>

				<div className='flex flex-col justify-center md:col-span-2'>
					{/* <div className='flex flex-col justify-between md:col-span-2'> */}
					<div className='space-y-4'>
						<div className='flex items-center space-x-2 text-sm text-muted-foreground'>
							<Calendar className='w-4 h-4' />
							<span>{date}</span>
							<span>•</span>
							<span>{duration}</span>
						</div>

						<h3 className='text-2xl font-bold'>{title}</h3>
						<p className='text-muted-foreground'>{description}</p>
					</div>

					{/* <div className='mt-6 space-y-4'>
						<div className='relative w-full h-2 overflow-hidden bg-muted rounded-full'>
							<div
								className='absolute top-0 left-0 h-full bg-primary'
								style={{ width: `${progress}%` }}
							></div>
						</div>

						<div className='flex items-center justify-between'>
							<span className='text-sm text-muted-foreground'>
								{formatTime(progress)}
							</span>
							<span className='text-sm text-muted-foreground'>
								{duration}
							</span>
						</div>

						<div className='flex items-center justify-between'>
							<div className='flex items-center space-x-4'>
								<button className='p-2 rounded-full hover:bg-muted'>
									<SkipBack className='w-5 h-5' />
								</button>
								<button
									onClick={togglePlayback}
									className='flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors'
								>
									{isPlaying ? (
										<Pause className='w-6 h-6' />
									) : (
										<Play className='w-6 h-6 ml-1' />
									)}
								</button>
								<button className='p-2 rounded-full hover:bg-muted'>
									<SkipForward className='w-5 h-5' />
								</button>
							</div>

							<div className='flex items-center space-x-2'>
								<Volume2 className='w-5 h-5 text-muted-foreground' />
								<div className='relative w-24 h-1.5 bg-muted rounded-full'>
									<div className='absolute top-0 left-0 w-3/4 h-full bg-primary rounded-full'></div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

import { Play, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GridEpisodeCard({ episode, index }) {
	return (
		<div
			className='overflow-hidden transition-all duration-300 bg-background rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1'
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<div className='relative'>
				<Image
					src={episode.imageUrl || '/placeholder.svg'}
					alt={episode.title}
					width={400}
					height={400}
					className='object-contain w-full aspect-square'
				/>
				{episode.featured && (
					<div className='absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground'>
						Featured
					</div>
				)}
				<div className='absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full bg-primary text-secondary-foreground'>
					{episode.category}
				</div>
				<div className='absolute inset-0 transition-opacity bg-black/30 opacity-0 hover:opacity-100'>
					<div className='flex items-center justify-center w-full h-full'>
						<div className='flex items-center justify-center w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm'>
							<Play className='w-6 h-6 ml-1 text-primary' />
						</div>
					</div>
				</div>
			</div>

			<div className='p-4 space-y-2'>
				<div className='flex items-center space-x-2 text-xs text-muted-foreground'>
					<div className='flex items-center'>
						<Calendar className='w-3 h-3 mr-1' />
						<span>{episode.date}</span>
					</div>
					<span>•</span>
					<div className='flex items-center'>
						<Clock className='w-3 h-3 mr-1' />
						<span>{episode.duration}</span>
					</div>
				</div>

				<h3 className='font-bold line-clamp-1'>{episode.title}</h3>
				<p className='text-sm text-muted-foreground line-clamp-2'>
					{episode.description}
				</p>

				<Link
					href={`/episodes/${episode.id}`}
					className='inline-block pt-2 text-sm font-medium text-primary hover:underline'
				>
					Listen Now
				</Link>
			</div>
		</div>
	);
}

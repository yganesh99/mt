import Image from 'next/image';
import Link from 'next/link';

import { Play, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ListEpisodeCard({ episode, index }) {
	return (
		<div
			className='flex flex-col overflow-hidden transition-all duration-300 bg-background rounded-xl shadow-md hover:shadow-lg sm:flex-row'
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<div className='relative sm:w-48 md:w-64'>
				<Image
					src={episode.imageUrl || '/placeholder.svg'}
					alt={episode.title}
					width={256}
					height={256}
					className='object-contain w-full h-full aspect-square sm:aspect-auto'
				/>
				{episode.featured && (
					<div className='absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground'>
						Featured
					</div>
				)}
				<div className='absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full bg-primary text-secondary-foreground'>
					{episode.category}
				</div>
			</div>

			<div className='flex flex-col justify-between flex-1 p-4'>
				<div className='space-y-2'>
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

					<h3 className='text-lg font-bold'>{episode.title}</h3>
					<p className='text-sm text-muted-foreground line-clamp-2'>
						{episode.description}
					</p>
				</div>

				<div className='flex items-center justify-between mt-4'>
					<Link
						href={`/episodes/${episode.id}`}
						className='text-sm font-medium text-primary hover:underline'
					>
						Listen Now
					</Link>

					<Button
						variant='outline'
						size='sm'
						className='rounded-full'
					>
						<Play className='w-4 h-4 mr-1' />
						Play
					</Button>
				</div>
			</div>
		</div>
	);
}

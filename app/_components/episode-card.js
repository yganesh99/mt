import Image from 'next/image';
import Link from 'next/link';
import { Play, Calendar } from 'lucide-react';

export default function EpisodeCard({
	title,
	description,
	duration,
	date,
	imageUrl,
}) {
	return (
		<div className='overflow-hidden transition-all duration-300 bg-background rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1'>
			<div className='relative'>
				<Image
					src={imageUrl || '/placeholder.svg'}
					alt={title}
					width={300}
					height={300}
					className='object-contain w-full aspect-square'
				/>
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
					<Calendar className='w-3 h-3' />
					<span>{date}</span>
					<span>•</span>
					<span>{duration}</span>
				</div>

				<h3 className='font-bold line-clamp-1'>{title}</h3>
				<p className='text-sm text-muted-foreground line-clamp-2'>
					{description}
				</p>

				<Link
					href='#'
					className='inline-block pt-2 text-sm font-medium text-primary hover:underline'
				>
					Listen Now
				</Link>
			</div>
		</div>
	);
}

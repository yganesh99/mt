'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GridEpisodeCard from '@/app/_components/grid-episode-card';
import ListEpisodeCard from '@/app/_components/list-episode-card';

export function EpisodesList({ episodes }) {
	const [viewMode, setViewMode] = useState('grid');
	const [currentPage, setCurrentPage] = useState(1);
	const episodesPerPage = viewMode === 'grid' ? 9 : 5;

	const totalPages = Math.ceil(episodes.length / episodesPerPage);
	const startIndex = (currentPage - 1) * episodesPerPage;
	const currentEpisodes = episodes.slice(
		startIndex,
		startIndex + episodesPerPage
	);

	return (
		<div className='space-y-8 animate-fadeIn animation-delay-300'>
			<div className='flex items-center justify-between'>
				<div className='text-sm text-muted-foreground'>
					Showing {startIndex + 1}-
					{Math.min(startIndex + episodesPerPage, episodes.length)} of{' '}
					{episodes.length} episodes
				</div>
				<div className='flex items-center space-x-2'>
					<Button
						variant={viewMode === 'grid' ? 'default' : 'outline'}
						size='sm'
						onClick={() => setViewMode('grid')}
						className='w-10 h-8'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<rect
								x='3'
								y='3'
								width='7'
								height='7'
							/>
							<rect
								x='14'
								y='3'
								width='7'
								height='7'
							/>
							<rect
								x='3'
								y='14'
								width='7'
								height='7'
							/>
							<rect
								x='14'
								y='14'
								width='7'
								height='7'
							/>
						</svg>
					</Button>
					<Button
						variant={viewMode === 'list' ? 'default' : 'outline'}
						size='sm'
						onClick={() => setViewMode('list')}
						className='w-10 h-8'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<line
								x1='8'
								y1='6'
								x2='21'
								y2='6'
							/>
							<line
								x1='8'
								y1='12'
								x2='21'
								y2='12'
							/>
							<line
								x1='8'
								y1='18'
								x2='21'
								y2='18'
							/>
							<line
								x1='3'
								y1='6'
								x2='3.01'
								y2='6'
							/>
							<line
								x1='3'
								y1='12'
								x2='3.01'
								y2='12'
							/>
							<line
								x1='3'
								y1='18'
								x2='3.01'
								y2='18'
							/>
						</svg>
					</Button>
				</div>
			</div>

			{viewMode === 'grid' ? (
				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{currentEpisodes.map((episode, index) => (
						<GridEpisodeCard
							key={episode.id}
							episode={episode}
							index={index}
						/>
					))}
				</div>
			) : (
				<div className='space-y-4'>
					{currentEpisodes.map((episode, index) => (
						<ListEpisodeCard
							key={episode.id}
							episode={episode}
							index={index}
						/>
					))}
				</div>
			)}

			{totalPages > 1 && (
				<div className='flex items-center justify-center mt-8 space-x-2'>
					<Button
						variant='outline'
						size='icon'
						onClick={() =>
							setCurrentPage((prev) => Math.max(prev - 1, 1))
						}
						disabled={currentPage === 1}
					>
						<ChevronLeft className='w-4 h-4' />
					</Button>

					{Array.from({ length: totalPages }).map((_, index) => {
						const pageNumber = index + 1;
						// Show first page, last page, current page, and pages around current
						const shouldShow =
							pageNumber === 1 ||
							pageNumber === totalPages ||
							Math.abs(pageNumber - currentPage) <= 1;

						// Show ellipsis for gaps
						if (!shouldShow) {
							// Only show one ellipsis between gaps
							if (
								pageNumber === 2 ||
								pageNumber === totalPages - 1
							) {
								return (
									<span
										key={pageNumber}
										className='flex items-center justify-center w-8 h-8 text-sm text-muted-foreground'
									>
										...
									</span>
								);
							}
							return null;
						}

						return (
							<Button
								key={pageNumber}
								variant={
									currentPage === pageNumber
										? 'default'
										: 'outline'
								}
								size='icon'
								className='w-8 h-8'
								onClick={() => setCurrentPage(pageNumber)}
							>
								{pageNumber}
							</Button>
						);
					})}

					<Button
						variant='outline'
						size='icon'
						onClick={() =>
							setCurrentPage((prev) =>
								Math.min(prev + 1, totalPages)
							)
						}
						disabled={currentPage === totalPages}
					>
						<ChevronRight className='w-4 h-4' />
					</Button>
				</div>
			)}
		</div>
	);
}

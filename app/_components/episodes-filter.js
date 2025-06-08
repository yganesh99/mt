'use client';

import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuCheckboxItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const categories = ['All', 'Cinema', 'Tweet Talks', 'Debates', 'Deep Talks'];

export function EpisodesFilter() {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [sortBy, setSortBy] = useState('newest');

	const handleCategoryToggle = (category) => {
		if (category === 'All') {
			setSelectedCategories([]);
			return;
		}

		setSelectedCategories((prev) => {
			if (prev.includes(category)) {
				return prev.filter((c) => c !== category);
			} else {
				return [...prev, category];
			}
		});
	};

	const clearFilters = () => {
		setSearchQuery('');
		setSelectedCategories([]);
		setSortBy('newest');
	};

	const hasActiveFilters =
		searchQuery || selectedCategories.length > 0 || sortBy !== 'newest';

	return (
		<div className='mb-8 space-y-4 animate-fadeIn animation-delay-200'>
			<div className='flex flex-col gap-4 sm:flex-row'>
				<div className='relative flex-1'>
					<Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white' />
					<Input
						placeholder='Search episodes...'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className='pl-10'
					/>
					{searchQuery && (
						<button
							onClick={() => setSearchQuery('')}
							className='absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-foreground'
						>
							<X className='h-4 w-4' />
						</button>
					)}
				</div>

				<div className='flex gap-2'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='outline'
								className='gap-2'
							>
								<Filter className='h-4 w-4' />
								Categories
								{selectedCategories.length > 0 && (
									<span className='flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground'>
										{selectedCategories.length}
									</span>
								)}
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align='end'
							className='w-56'
						>
							<DropdownMenuLabel>
								Filter by Category
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuCheckboxItem
								checked={selectedCategories.length === 0}
								onCheckedChange={() =>
									setSelectedCategories([])
								}
							>
								All Categories
							</DropdownMenuCheckboxItem>
							{categories.slice(1).map((category) => (
								<DropdownMenuCheckboxItem
									key={category}
									checked={selectedCategories.includes(
										category,
									)}
									onCheckedChange={() =>
										handleCategoryToggle(category)
									}
								>
									{category}
								</DropdownMenuCheckboxItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline'>Sort by</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>Sort Episodes</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuCheckboxItem
								checked={sortBy === 'newest'}
								onCheckedChange={() => setSortBy('newest')}
							>
								Newest First
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={sortBy === 'oldest'}
								onCheckedChange={() => setSortBy('oldest')}
							>
								Oldest First
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={sortBy === 'duration'}
								onCheckedChange={() => setSortBy('duration')}
							>
								Duration
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem
								checked={sortBy === 'title'}
								onCheckedChange={() => setSortBy('title')}
							>
								Title (A-Z)
							</DropdownMenuCheckboxItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			{hasActiveFilters && (
				<div className='flex items-center justify-between'>
					<div className='flex flex-wrap gap-2'>
						{selectedCategories.map((category) => (
							<div
								key={category}
								className='flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm'
							>
								{category}
								<button
									onClick={() =>
										handleCategoryToggle(category)
									}
								>
									<X className='h-3 w-3' />
								</button>
							</div>
						))}
						{searchQuery && (
							<div className='flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm'>
								Search: {searchQuery}
								<button onClick={() => setSearchQuery('')}>
									<X className='h-3 w-3' />
								</button>
							</div>
						)}
						{sortBy !== 'newest' && (
							<div className='flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm'>
								Sort:{' '}
								{sortBy.charAt(0).toUpperCase() +
									sortBy.slice(1)}
								<button onClick={() => setSortBy('newest')}>
									<X className='h-3 w-3' />
								</button>
							</div>
						)}
					</div>
					<Button
						variant='ghost'
						size='sm'
						onClick={clearFilters}
					>
						Clear all
					</Button>
				</div>
			)}
		</div>
	);
}

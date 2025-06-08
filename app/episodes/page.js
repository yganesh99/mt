import { Metadata } from 'next';
import { EpisodesFilter } from '../_components/episodes-filter';
import { EpisodesList } from '../_components/episodes-list';

export const metadata = {
	title: 'Episodes | Masala Thoughts Podcast',
	description: 'Browse all episodes of the Masala Thoughts podcast.',
};

// This would typically come from a database or CMS
const episodes = [
	{
		id: 'ep-1',
		title: `Greatest of all time? - Episode 1`,
		description: `GOATest friends expressing their unorganized thoughts on the latest Vijay movie called GOAT, amidst Manimegalai, Priyanka CWC chaos.`,
		duration: '50:57',
		date: `September 16, 2024`,
		category: 'Cinema',
		imageUrl:
			'https://i.ytimg.com/vi/fq5L-Lh4gOk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0BHRIobpZJfZ50tG13YONBa4bWg',
		featured: false,
	},
	{
		id: 'ep-2',
		title: `One Last Time, Vj Anna! - Episode 2`,
		description: `With Vijay na saying goodbye to Kollywood, we speculate what Tamil cinema will be like without the THALAPATHY.`,
		duration: '01:17:36',
		date: `September 30, 2024`,
		category: 'Cinema',
		imageUrl:
			'https://i.ytimg.com/vi/9qpmN4Xf6Zg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvbGKdW4lwKDyK0jc1e_AxsKbwPA',
		featured: false,
	},
	{
		id: 'ep-3',
		title: `Women in Tamil Cinema: Representation & Realities - Episode 3`,
		description: `Welcome to an insightful Tamil podcast episode where we dive deep into the journey of women in the Tamil film industry. This episode explores the roles and representations of female characters, the challenges women face on and off-screen, and the industry's evolving portrayal of women.`,
		duration: '01:29:31',
		date: `November 11, 2024`,
		category: 'Cinema',
		imageUrl:
			'https://i.ytimg.com/vi/6Al-LtvdyDY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzyvUth8AlaFXAuy_EkFgNeIDklQ',
		featured: false,
	},
	{
		id: 'ep-4',
		title: 'The Tweet Talk: Reacting to the Most Random Tweets! - Episode 4',
		description:
			'Brace yourself as a group of friends yap about the most randomest tweet, an absolute Twitter chaos as we dive into the wildest, weirdest, and most random tweets we found! From introducing sexuality to kids (who knew this would be a debate?), to the pros & cons of movie reviews (especially in Kollywood—because opinions are never mild), and the rollercoaster of arranged marriages with the hope of falling in love (bold strategy, let’s see if it works).',
		duration: '01:03:30',
		date: 'April 2, 2025',
		category: 'Tweet Talks',
		imageUrl: 'https://i.ytimg.com/vi_webp/TwKlPTUTGO0/sddefault.webp',
		featured: false,
	},
];

export default function EpisodesPage() {
	return (
		<div className='min-h-screen pt-24 pb-16 bg-gradient-to-b from-primary/50 to-background'>
			<div className='container px-4 mx-auto sm:px-6 lg:px-8'>
				<div className='max-w-2xl mx-auto mb-12 text-center'>
					<h1 className='mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-white animate-fadeIn'>
						All Episodes
					</h1>
					<p className='text-lg text-gray-300 animate-fadeIn animation-delay-100'>
						Browse our complete collection of thought-provoking
						conversations that spice up your intellectual journey.
					</p>
				</div>

				<EpisodesFilter />

				<EpisodesList episodes={episodes} />
			</div>
		</div>
	);
}

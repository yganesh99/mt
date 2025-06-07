import Image from 'next/image';
import Link from 'next/link';
import { Headphones, Play, Mic, ChevronRight, Rss } from 'lucide-react';
import PodcastPlayer from './_components/podcast-player';
import EpisodeCard from './_components/episode-card';
import Newsletter from './_components/newsletter';
import AnimatedWaveform from './_components/animated-waveform';
import Logo from '../public/Logo.png';

export default function Home() {
	const episodes = [
		{
			title: `Women in Tamil Cinema: Representation & Realities - Episode 3`,
			description: `Welcome to an insightful Tamil podcast episode where we dive deep into the journey of women in the Tamil film industry. This episode explores the roles and representations of female characters, the challenges women face on and off-screen, and the industry's evolving portrayal of women.`,
			duration: '01:29:31',
			date: `November 11, 2024`,
			imageUrl:
				'https://i.ytimg.com/vi/6Al-LtvdyDY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAzyvUth8AlaFXAuy_EkFgNeIDklQ',
		},
		{
			title: `One Last Time, Vj Anna! - Episode 2`,
			description: `With Vijay na saying goodbye to Kollywood, we speculate what Tamil cinema will be like without the THALAPATHY.`,
			duration: '01:17:36',
			date: `September 30, 2024`,
			imageUrl:
				'https://i.ytimg.com/vi/9qpmN4Xf6Zg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBvbGKdW4lwKDyK0jc1e_AxsKbwPA',
		},
		{
			title: `Greatest of all time? - Episode 1`,
			description: `GOATest friends expressing their unorganized thoughts on the latest Vijay movie called GOAT, amidst Manimegalai, Priyanka CWC chaos.`,
			duration: '50:57',
			date: `September 16, 2024`,
			imageUrl:
				'https://i.ytimg.com/vi/fq5L-Lh4gOk/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC0BHRIobpZJfZ50tG13YONBa4bWg',
		},
	];

	return (
		<div className='min-h-screen bg-background'>
			{/* Hero Section */}
			<section className='relative overflow-hidden'>
				<div className='absolute inset-0 z-0'>
					<div className='absolute inset-0 bg-gradient-to-b from-primary/20 to-background'></div>
					<div className='absolute top-0 left-0 w-full h-full'>
						{/* <AnimatedWaveform /> */}
					</div>
				</div>

				<div className='container relative z-10 px-4 py-24 mx-auto sm:px-6 lg:px-8 lg:py-32'>
					<div className='flex flex-col items-center justify-between gap-12 lg:flex-row'>
						<div className='flex flex-col max-w-2xl space-y-6 text-center lg:text-left'>
							<div className='inline-flex items-center px-4 py-1 space-x-2 text-sm font-medium rounded-full bg-secondary/20 text-secondary-foreground animate-fadeIn'>
								<span>* New Episode Every Monday</span>
							</div>
							<h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-slideUp'>
								<span className='block text-primary'>
									MASALA
								</span>
								<span className='block text-secondary'>
									THOUGHTS
								</span>
							</h1>
							<p className='text-xl text-muted-foreground animate-slideUp animation-delay-100'>
								Spice up your mind with thought-provoking
								conversations on culture, technology, and
								everything in between.
							</p>
							<div className='flex flex-wrap justify-center gap-4 lg:justify-start animate-slideUp animation-delay-200'>
								<Link
									href='#latest-episodes'
									className='inline-flex items-center px-6 py-3 font-medium text-white rounded-full bg-primary hover:bg-primary/90 transition-all'
								>
									<Headphones className='w-5 h-5 mr-2' />
									Listen Now
								</Link>
								<Link
									href='https://www.youtube.com/@MasalaThoughts'
									target='_blank'
									className='inline-flex items-center px-6 py-3 font-medium border rounded-full text-primary border-primary hover:bg-primary/10 transition-all'
								>
									<Rss className='w-5 h-5 mr-2' />
									Subscribe
								</Link>
							</div>
						</div>
						<div className='relative w-64 h-64 sm:w-80 sm:h-80 animate-float'>
							<div className='absolute inset-0 rounded-full bg-primary/30 blur-3xl'></div>
							<Image
								src={Logo}
								alt='Masala Thoughts Podcast Logo'
								width={320}
								height={320}
								className='relative z-10 object-contain'
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Episode */}
			<section
				id='latest-episodes'
				className='py-16 bg-background'
			>
				<div className='container px-4 mx-auto sm:px-6 lg:px-8'>
					<div className='flex flex-col items-start justify-between mb-12 sm:flex-row sm:items-center'>
						<h2 className='text-3xl font-bold tracking-tight animate-slideUp'>
							Latest Episode
						</h2>
						<Link
							href='/episodes'
							className='inline-flex items-center mt-4 text-primary hover:underline sm:mt-0 animate-slideUp animation-delay-100'
						>
							View all episodes
							<ChevronRight className='w-4 h-4 ml-1' />
						</Link>
					</div>

					<div className='animate-fadeIn animation-delay-200'>
						<PodcastPlayer
							title='The Tweet Talk: Reacting to the Most Random Tweets! - Episode 4'
							description='Brace yourself as a group of friends yap about the most randomest tweet, an absolute Twitter chaos as we dive into the wildest, weirdest, and most random tweets we found! From introducing sexuality to kids (who knew this would be a debate?), to the pros & cons of movie reviews (especially in Kollywood—because opinions are never mild), and the rollercoaster of arranged marriages with the hope of falling in love (bold strategy, let’s see if it works).'
							duration='01:03:30'
							date='April 2, 2025'
							imageUrl='https://i.ytimg.com/vi_webp/TwKlPTUTGO0/sddefault.webp'
						/>
					</div>
				</div>
			</section>

			{/* Episode List */}
			<section className='py-16 bg-muted/30'>
				<div className='container px-4 mx-auto sm:px-6 lg:px-8'>
					<h2 className='mb-12 text-3xl font-bold tracking-tight animate-slideUp'>
						Popular Episodes
					</h2>

					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
						{episodes.map((episode, index) => (
							<div
								key={index}
								className='animate-slideUp'
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<EpisodeCard
									title={episode.title}
									description={episode.description}
									duration={episode.duration}
									date={episode.data}
									imageUrl={episode.imageUrl}
								/>
							</div>
						))}
					</div>

					<div className='flex justify-center mt-12'>
						<Link
							href='/episodes'
							className='inline-flex items-center px-6 py-3 font-medium border rounded-full text-primary border-primary hover:bg-primary/10 transition-all animate-pulse'
						>
							Load More Episodes
						</Link>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className='py-16 bg-background'>
				<div className='container px-4 mx-auto sm:px-6 lg:px-8'>
					{/* <div className='grid gap-12 lg:grid-cols-2'> */}
					<div className='grid'>
						<div className='flex flex-col justify-center space-y-6 animate-slideUp'>
							<h2 className='text-3xl font-bold tracking-tight'>
								About The Podcast
							</h2>
							<p className='text-lg text-muted-foreground'>
								Masala Thoughts brings you diverse perspectives
								and thought-provoking conversations that spice
								up your intellectual journey. Hosted by
								passionate storytellers, our podcast explores
								the rich tapestry of ideas across culture,
								technology, philosophy, and everyday life.
							</p>
							<p className='text-lg text-muted-foreground'>
								Join us every Monday for new episodes that
								challenge your thinking and expand your
								horizons.
							</p>
							<div className='flex items-center space-x-4'>
								<div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary'>
									<Mic className='w-6 h-6' />
								</div>
								<div>
									<p className='font-medium'>Hosted by</p>
									<p className='text-muted-foreground'>
										The Masala Team
									</p>
								</div>
							</div>
						</div>

						{/* <div className='relative h-auto animate-slideUp animation-delay-200'>
							<div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20'></div>
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='relative flex items-center justify-center w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm cursor-pointer group'>
									<div className='absolute inset-0 rounded-full bg-primary opacity-20 group-hover:opacity-30 transition-opacity'></div>
									<Play className='relative z-10 w-8 h-8 text-primary' />
								</div>
							</div>
							<Image
								src='https://cdn6.f-cdn.com/contestentries/2330448/58447787/654146d228019_thumb900.jpg'
								alt='Podcast Studio'
								width={600}
								height={400}
								className='object-cover w-full h-full rounded-2xl'
							/>
						</div> */}
					</div>
				</div>
			</section>

			{/* Subscribe Section */}
			<section
				id='subscribe'
				className='py-16 bg-primary/10'
			>
				<div className='container px-4 mx-auto sm:px-6 lg:px-8'>
					<div className='max-w-3xl mx-auto text-center animate-fadeIn'>
						<h2 className='mb-6 text-3xl font-bold tracking-tight'>
							Never Miss An Episode
						</h2>
						<p className='mb-8 text-lg text-muted-foreground'>
							Subscribe to our newsletter to receive updates on
							new episode releases and announcements about
							upcoming events.
						</p>
						<Newsletter />

						<div className='grid grid-cols-2 gap-4 mt-12 sm:grid-cols-2'>
							{/* <div className='grid grid-cols-2 gap-4 mt-12 sm:grid-cols-4'> */}
							{[
								'Spotify',
								// 'Apple Podcasts',
								// 'Google Podcasts',
								// 'RSS',
								'Youtube',
							].map((platform, i) => (
								<Link
									key={platform}
									href='#'
									className='flex flex-col items-center p-4 space-y-2 rounded-lg bg-background hover:bg-muted transition-colors animate-slideUp'
									style={{ animationDelay: `${i * 100}ms` }}
								>
									<div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/20'>
										<Headphones className='w-6 h-6 text-primary' />
									</div>
									<span className='text-sm font-medium'>
										{platform}
									</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

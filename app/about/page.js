'use client';

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import Yogi from '../../public/yogi.png';
import Mika from '../../public/mika.png';
import Shevs from '../../public/shevs.png';
import Saiju from '../../public/saiju.png';
import Swathi from '../../public/swathi.png';
import Sanjay from '../../public/sanjay2.png';
import Raj from '../../public/raj.png';
import Logo from '../../public/Logo.png';

export default function AboutPage() {
	const teamMembers = [
		{
			name: 'Mika',
			role: 'Certified Thavalai',
			description:
				'Aka aye sinamika, low Budget pooja hedge,the lifeline of masala thoughts, needs constant validation Like this to make her do the edit, Post and pay for the Podcast app 🤣 La la Land Girl Living the Tamil meme Life in her own olulu world, lame puns and forgetting every Tamil Song Lyric explains mika the best. Easily triggered when you bring the Gender Card, which turns the gvm heroine into a vetrimaaran Heroine. It’s always a hope or rope for our pooja, but if you ever need help with your smart phone or life , she’s the one you call cuz that’s the only jeevan that will answer. Aye sinamika a Twitter celeb is also known to get serupadi on Twitter from vijaykanth fans to Vijay fans. All area layum akka adi vangada edam illa. Varta mama durrrr.',
			silhouette: Mika,
		},
		{
			name: 'Shevs',
			role: 'Certified Anil & Intense CSK Fan',
			description:
				'The queen of actual facts. Effortlessly juggles married life, a full-time marketing job, and her inner Kollywood–CSK fangirl like a total pro. Knows everything, does everything—even has questionable celebrity encounters (like definitely not touching Trisha’s hair strand). Once hosted a Super Singer show… from AliExpress. Saintly on the outside, but somehow knows everyone and every single gossip. Official Thalaivi of the Ceylon Thalapathy Rasigar Mandram, currently busy manifesting her voting rights for TVK 2026.',
			silhouette: Shevs,
		},
		{
			name: 'Saiju',
			role: 'Certified Aamai & Depressed Arsenal Fan & Yapper Machine',
			description:
				'No, his parents were not inspired by Sai Baba. Calls himself a “green forest” and honestly, that’s just the beginning. Certified yapper who absolutely cannot stand losing an argument—and will not stop until you give in. Meme lord by day, unofficial mimicry artist by night (his S. Janaki and Venu Chakravarthy impressions are elite), and a stand-up comedian in denial. Thinks he looks like actor Vishal—just… the compressed version. Officially lives in Switzerland, though we strongly suspect he’s actually living in some refugee camp. Dramatic? Yes. Workaholic? For sure. Arshloc to his coworkers? Ask them (lmao). Carries his eternal optimism the way Ajith fans carry punch dialogues—loudly and proudly. Madly in love with Ajith Kumar, Arsenal FC, and somehow still surviving both. Certified Big Flirt™. You’ve been warned.',
			silhouette: Saiju,
		},
		{
			name: 'Yogi',
			role: 'Dormant Aamai & Robotic Software Engineer',
			description:
				'Aka Yogi, Gangster Ganesh. Another Ajith fan (or ex-fan depending on his mood). A dedicated software engineer who only shows up to podcast sessions when we raise a Jira ticket. Strong opinions, plays devil’s advocate like it’s his side hustle, and is practical to the core. Would ditch tech life in a heartbeat to be an AD for Bala or Pa. Ranjith—but only if Amma and Appa give full approval. Firm believer that movies must have a message (no “mass for the sake of mass” here). Most likely to be spotted at a tea kadai.',
			silhouette: Yogi,
		},
		{
			name: 'Swathi',
			role: 'Closeted Anil',
			description:
				'Aka Loosu Doctor Swathi. Always pretending to save lives on night shifts or posing at beaches, too "busy" for our podcast. Shows up once in a while to scream fake feminism and vanish. Calls herself a closeted Anil fan, but her cringey 2009 "Anna" fan page exposes it all. Moves like a thambi among the boys. Her unfiltered mouth could start a civil war, so we keep her appearances rare for public safety. She’ll find the shadiest restaurant in every country she visits for an “authentic’’ taste  — eat at your own risk (and carry a pharmacy).',
			silhouette: Swathi,
		},
		{
			name: 'Sanjay',
			role: 'Thideer Anil Since Leo',
			description:
				'Aka Sanja, blessed with the iconic Arjun Das voice. Lives in his own delulu world, but always with a touch of class. Certified Janhvi Kapoor stan (just check his IG likes, no further proof needed). Party animal with killer dance moves—could clear a dance floor or steal the spotlight in seconds. Often mistaken for Varman from Jailer – “Manasalayoo??” included. Fun fact: he genuinely believed Parthiban was not Leo Das, even with Anirudh yelling “Leooooo” in full surround sound. A thideer Vijay fan post-Leo… Good save us from these Anils.',
			silhouette: Sanjay,
		},
		{
			name: 'Niddy',
			role: 'UUUHHMM...MMMM...YYE.',
			description:
				'Aka Niddha, Niddy, the Ilayamaan. Civil engineer with a math allergy. Man of few words but casually slides into DMs with a smooth “hop into my Merc.” Side-profile king. Also known as nidheshrajracing, part-time guitarist for rajboicovers, and enjoys getting punched (by his boxing coach, don’t worry). Currently busy plotting the rebrand of Wellawatte to Nidheshwatte. Rumored to be a silent heartthrob. Travel vlogs coming soon… or never.',
			silhouette: Raj,
		},
	];

	return (
		<div className='min-h-screen pt-24 pb-16 bg-gradient-to-b from-primary/50 to-background'>
			{/* Hero Section */}
			<div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8'>
				<div className='flex-1 text-center lg:text-left'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight'>
						About Masala Thoughts 🎙🍿
					</h1>
					<p className='text-base sm:text-lg text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed'>
						Welcome to Masala Thoughts – the podcast that sounds
						exactly like your friends arguing over biryani and movie
						plots at 1AM.
						<br className='hidden sm:block' />
						<br className='hidden sm:block' />
						We're a gang with too many opinions, questionable
						priorities, and an unhealthy obsession with Kollywood,
						controversies, and cringe moments we secretly love. We
						talk in Tanglish, laugh too loud, and somehow manage to
						turn casual convos into full-blown episodes. Whether
						you're a Thalapathy stan, a Thala devotee, or someone
						who watches just for the songs – we got something for
						you. From cinema debates to sneak diss fights to random
						side quests about life, this is your new favourite
						chaotic comfort zone.
					</p>
				</div>
				<div className='flex-shrink-0 order-first lg:order-last'>
					<Image
						src={Logo}
						alt='Masala Thoughts Podcast Logo'
						width={320}
						height={320}
						className='relative z-10 object-contain w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80'
						priority
					/>
				</div>
			</div>

			<section className='container mx-auto py-12 px-4'>
				<h1 className='text-4xl md:text-5xl font-bold mb-6'>
					Meet Our Team
				</h1>
				<p className='text-lg text-gray-300 max-w-3xl'>
					The passionate minds behind Masala Thoughts bring diverse
					perspectives to create thought-provoking conversations.
				</p>
			</section>

			{/* Team Members Section */}
			<section className='container mx-auto py-12 px-4'>
				<div className='space-y-24 md:space-y-32'>
					{teamMembers.map((member, index) => {
						const { ref, inView } = useInView({
							triggerOnce: true, // animate only once
							threshold: 0.65, // start when 65% of the image is visible
						});

						return (
							<div
								key={member.name}
								className={`flex flex-col ${
									index % 2 === 0
										? 'md:flex-row'
										: 'md:flex-row-reverse'
								} items-center gap-8 md:gap-16`}
							>
								<div
									ref={ref}
									className={`w-full md:w-1/2 flex justify-center transition-all duration-700 ${
										inView
											? 'animate-slideUp'
											: 'opacity-0 translate-y-10'
									}`}
								>
									<div className='w-64 h-80 rounded-lg overflow-hidden flex items-center justify-center'>
										<Image
											src={member.silhouette}
											alt={`Silhouette of ${member.name}`}
											width={256}
											height={320}
											className='object-cover w-full h-full'
										/>
									</div>
								</div>
								<div className='w-full md:w-1/2 text-center md:text-left'>
									<h2 className='text-2xl md:text-3xl font-bold text-[#e05f35] mb-2'>
										{member.name}
									</h2>
									<p className='text-yellow-300 mb-4'>
										{member.role}
									</p>
									<p className='text-gray-300'>
										{member.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

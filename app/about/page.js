import Image from 'next/image';
import Yogi from '../../public/yogi.png';
import Mika from '../../public/mika.png';
import Shevs from '../../public/shevs.png';
import Saiju from '../../public/saiju.png';
import Swathi from '../../public/swathi.png';
import Sanjay from '../../public/sanjay2.png';
import Raj from '../../public/raj.png';

export default function AboutPage() {
	const teamMembers = [
		{
			name: 'Mika',
			role: 'Certified Thavalai',
			description:
				'GVM heroine that can turn into Vetrimaran heroine anytime.',
			silhouette: Mika,
		},
		{
			name: 'Shevs',
			role: 'Certified Anil & Intense CSK Fan',
			description:
				'Has hosted Super Singer(from Ali Express). Busy getting her voting rights in TN for TVK 2026.',
			silhouette: Shevs,
		},
		{
			name: 'Saiju',
			role: 'Certified Aamai & Depressed Arsenal Fan & Yapper Machine',
			description: 'Stand up comedian in denial.',
			silhouette: Saiju,
		},
		{
			name: 'Yogi',
			role: 'Dormant Aamai & Robotic Software Engineer',
			description:
				'Shows up to the podcast only when a JIRA ticket is assigned.',
			silhouette: Yogi,
		},
		{
			name: 'Swathi',
			role: 'Closeted Anil',
			description:
				'Her unfiltered mouth could start a civil war, so we keep her appearances rare for public safety.',
			silhouette: Swathi,
		},
		{
			name: 'Sanjay',
			role: 'Thideer Anil Since Leo',
			description:
				'Blessed with an Arjun Das voice. Often mistaken for Varman from Jailer. Manasalayoo??.',
			silhouette: Sanjay,
		},
		{
			name: 'Niddy',
			role: 'UUUHHMM...MMMM...YYE.',
			description: 'The Ilayamaan & 144p version of Suriya & AK Racing.',
			silhouette: Raj,
		},
	];

	return (
		<div className='min-h-screen pt-24 pb-16  bg-gradient-to-b from-primary/50 to-background'>
			{/* Hero Section */}
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
					{teamMembers.map((member, index) => (
						<div
							key={member.name}
							className={`flex flex-col ${
								index % 2 === 0
									? 'md:flex-row'
									: 'md:flex-row-reverse'
							} items-center gap-8 md:gap-16`}
						>
							<div
								className={`w-full md:w-1/2 flex justify-center ${
									index % 2 === 0
										? 'animate-bounce'
										: 'animate-bounce'
								}`}
							>
								<div className='relative w-64 h-80 rounded-lg overflow-hidden'>
									<div className='absolute inset-0 flex items-end justify-center'>
										<Image
											src={member.silhouette}
											alt={`Silhouette of ${member.name}`}
											width={256}
											height={320}
											className={`object-cover`}
										/>
									</div>
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
					))}
				</div>
			</section>
		</div>
	);
}

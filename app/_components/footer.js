import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Rss } from 'lucide-react';

export default function Footer() {
	return (
		<footer className='py-12 bg-muted/30'>
			<div className='container px-4 mx-auto sm:px-6 lg:px-8'>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					<div className='space-y-4'>
						<h3 className='text-lg font-bold text-primary'>
							Masala Thoughts
						</h3>
						<p className='text-sm text-muted-foreground'>
							Spice up your mind with thought-provoking
							conversations on culture, technology, and everything
							in between.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Facebook className='w-5 h-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Twitter className='w-5 h-5' />
								<span className='sr-only'>Twitter</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Instagram className='w-5 h-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Youtube className='w-5 h-5' />
								<span className='sr-only'>YouTube</span>
							</Link>
						</div>
					</div>

					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Quick Links</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href='/episodes'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Episodes
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Listen On</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									href='#'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Spotify
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Apple Podcasts
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									Google Podcasts
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-sm text-muted-foreground hover:text-primary'
								>
									RSS Feed
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h3 className='text-lg font-bold'>Subscribe</h3>
						<p className='text-sm text-muted-foreground'>
							Get the latest episodes delivered to your inbox.
						</p>
						<div className='flex'>
							<input
								type='email'
								placeholder='Email address'
								className='w-full px-3 py-2 text-sm border rounded-l-md border-muted focus:outline-none focus:ring-1 focus:ring-primary'
							/>
							<button className='px-3 py-2 text-sm font-medium rounded-r-md bg-primary text-primary-foreground hover:bg-primary/90'>
								<Rss className='w-4 h-4' />
							</button>
						</div>
					</div>
				</div>

				<div className='pt-8 mt-8 border-t border-muted'>
					<div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
						<p className='text-xs text-muted-foreground'>
							&copy; {new Date().getFullYear()} Masala Thoughts.
							All rights reserved.
						</p>
						<div className='flex space-x-4 text-xs text-muted-foreground'>
							<Link
								href='/privacy'
								className='hover:text-primary'
							>
								Privacy Policy
							</Link>
							<Link
								href='/terms'
								className='hover:text-primary'
							>
								Terms of Service
							</Link>
							<Link
								href='/cookies'
								className='hover:text-primary'
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

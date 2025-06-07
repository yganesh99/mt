'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Headphones, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '../lib/utils';
import Logo from '../../public/Logo.png';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// const toggleTheme = () => {
	// 	setTheme(theme === 'dark' ? 'light' : 'dark');
	// };

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Episodes', href: '/episodes' },
		{ name: 'About', href: '/about' },
		// { name: 'Contact', href: '/contact' },
	];

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
				isScrolled
					? 'bg-background/80 backdrop-blur-md shadow-sm'
					: 'bg-transparent'
			)}
		>
			<div className='container flex items-center justify-between px-4 py-4 mx-auto sm:px-6 lg:px-8'>
				<Link
					href='/'
					className='flex items-center space-x-2'
				>
					<div className='relative w-10 h-10 overflow-hidden rounded-full'>
						<Image
							src={Logo}
							alt='Masala Thoughts Logo'
							width={40}
							height={40}
							className='object-cover'
						/>
					</div>
					<span className='text-xl font-bold text-primary'>
						Masala Thoughts
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex md:items-center md:space-x-8'>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className='text-sm font-medium transition-colors hover:text-primary'
						>
							{link.name}
						</Link>
					))}
					<Link
						href='https://www.youtube.com/@MasalaThoughts'
						className='inline-flex items-center px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
						target='_blank'
					>
						<Headphones className='w-4 h-4 mr-2' />
						Subscribe
					</Link>
					{/* <button
						onClick={toggleTheme}
						className='p-2 rounded-full hover:bg-muted'
						aria-label='Toggle theme'
					>
						{theme === 'dark' ? (
							<Sun className='w-5 h-5' />
						) : (
							<Moon className='w-5 h-5' />
						)}
					</button> */}
				</nav>

				{/* Mobile Menu Button */}
				<div className='flex items-center space-x-4 md:hidden'>
					{/* <button
						onClick={toggleTheme}
						className='p-2 rounded-full hover:bg-muted'
						aria-label='Toggle theme'
					>
						{theme === 'dark' ? (
							<Sun className='w-5 h-5' />
						) : (
							<Moon className='w-5 h-5' />
						)}
					</button> */}
					<button
						onClick={toggleMenu}
						className='p-2 rounded-full hover:bg-muted'
						aria-label='Toggle menu'
					>
						{isMenuOpen ? (
							<X className='w-6 h-6' />
						) : (
							<Menu className='w-6 h-6' />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div
				className={cn(
					'fixed inset-0 z-40 flex flex-col pt-24 pb-6 bg-background md:hidden transition-transform duration-300 ease-in-out',
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<nav className='flex flex-col items-center space-y-6'>
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className='text-lg font-medium'
							onClick={() => setIsMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
					<Link
						href='https://www.youtube.com/@MasalaThoughts'
						className='inline-flex items-center px-6 py-3 text-base font-medium rounded-full bg-primary text-primary-foreground'
						onClick={() => setIsMenuOpen(false)}
						target='_blank'
					>
						<Headphones className='w-5 h-5 mr-2' />
						Subscribe
					</Link>
				</nav>
			</div>
		</header>
	);
}

'use client';

import React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
	const [email, setEmail] = useState('');
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			setIsSubmitted(true);
			setEmail('');
		}, 1500);
	};

	return (
		<div className='max-w-md mx-auto'>
			{isSubmitted ? (
				<div className='flex flex-col items-center p-6 space-y-4 text-center bg-background rounded-xl'>
					<CheckCircle className='w-12 h-12 text-primary' />
					<h3 className='text-xl font-medium'>
						Thanks for subscribing!
					</h3>
					<p className='text-muted-foreground'>
						You'll receive updates about new episodes and exclusive
						content.
					</p>
					<Button
						variant='outline'
						onClick={() => setIsSubmitted(false)}
					>
						Subscribe another email
					</Button>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2'
				>
					<div className='flex-1'>
						<Input
							type='email'
							placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className='w-full h-12 px-4 border-2 border-muted'
						/>
					</div>
					<Button
						type='submit'
						className='h-12 px-6 font-medium text-white bg-primary hover:bg-primary/90'
						disabled={isLoading}
					>
						{isLoading ? (
							<div className='flex items-center space-x-2'>
								<div className='w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin'></div>
								<span>Subscribing...</span>
							</div>
						) : (
							<div className='flex items-center space-x-2'>
								<Send className='w-4 h-4' />
								<span>Subscribe</span>
							</div>
						)}
					</Button>
				</form>
			)}
		</div>
	);
}

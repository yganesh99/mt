'use client';

import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

export default function Providers({ children }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <>{children}</>; // Render children without ThemeProvider during SSR
	}

	return (
		<ThemeProvider
			attribute='class'
			forcedTheme='dark'
		>
			{children}
		</ThemeProvider>
	); // Wrap children with ThemeProvider after mount
}

'use client';

import { ThemeProvider } from '../app/_components/theme-provider';

export default function ThemeProviderWrapper({ children }) {
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
			defaultTheme='light'
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}

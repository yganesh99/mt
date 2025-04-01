import React from 'react';
import '../app/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../app/_components/theme-provider';
import Header from '../app/_components/header';
import Footer from '../app/_components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}

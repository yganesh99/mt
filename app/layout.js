import React from 'react';
import '../app/globals.css';
import { Inter } from 'next/font/google';
import Providers from './_components/theme-provider';
import Header from '../app/_components/header';
import Footer from '../app/_components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

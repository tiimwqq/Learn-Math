import { Header } from '@/components/shared';
import '../styles/globals.css';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '700'],
});

export const metadata = {
	title: 'Learn Math',
	description: 'Math learning platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Header/>
				<main className="min-h-screen">
					{children}
				</main>
			</body>
		</html>
	);
}
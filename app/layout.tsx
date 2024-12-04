import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito_sans = Nunito_Sans({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});


export const metadata: Metadata = {
	title: "Learn Math",
	description: "math learning platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={nunito_sans.className}>
				<main className="min-h-screen">
					{children}
				</main>
			</body>
		</html>
	);
}

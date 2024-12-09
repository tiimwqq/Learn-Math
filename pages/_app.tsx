import { Nunito_Sans } from "next/font/google";
import { Header } from "@/components/shared";
import { Container } from "@/components/shared";
import '../styles/globals.css';
import { AppProps } from "next/app";

const nunito_sans = Nunito_Sans({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900'],
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<div className={nunito_sans.className}>
			<Header />
			<main className="min-h-screen">
				<Container>
					<Component {...pageProps} />
				</Container>
			</main>
		</div>
	);
}

export default MyApp;

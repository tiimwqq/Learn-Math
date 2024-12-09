import { Container, Title } from "@/components/shared";


export default function Home() {
	return (
		<>
			<Container>
				<Title text="Математика от А до Я" size="xl" className="font-extrabold mt-20" />
				<p className="text-sm text-gray-400 leading-3">Учите математику вместе с нами.</p>
			</Container >
		</>
	);
}
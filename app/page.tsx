import { Container, Title } from "@/components/shared";
import img from '../public/images/Octahedron.svg'
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TopicsOverview } from "@/components/topicsOverview";

export default function Home() {
	return (
		<Container>
			<div className={cn('flex justify-between')}>
				<div>
					<Title text="Математика от А до Я" size="xl" className="font-extrabold mt-20" />
					<p className="text-sm text-gray-400 leading-3">Учите математику вместе с нами.</p>
				</div>
				<Image src={img} alt="piramid" className={cn('mt-28')} />
			</div>
			<TopicsOverview />
		</Container >
	);
}




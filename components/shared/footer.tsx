import React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';
import Decription from './footer/description';
import Categories from './footer/categories';
import Contacts from './footer/contacts';
import SocialNetworks from './footer/socialNetwors';

type Props = {
	// Определите пропсы здесь
};

const Footer: React.FC<Props> = ({ }) => {
	return (
		<footer className={cn('bg-[#222222] h-[370px]')}>
			<Container className={cn('text-white py-[80px] flex justify-between')}>
				{/* лого */}
				<Decription />
				{/* категории */}
				<Categories />
				{/* контакты */}
				<Contacts />
				{/* соц сети */}
				<SocialNetworks/>
			</Container>
		</footer>
	);
};

export default Footer;
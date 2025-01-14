import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import React from 'react';
import { Button } from '../ui';
import { Container } from './container';
import { Navigation } from './header/navigation';
import SearchBar from './header/searchBar';
import Logo from './header/logo';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* левая часть */}
				<Logo />
				{/* навигация и поиск */}
				<Navigation className={'flex justify-between items-center gap-4'} />
				<SearchBar />
				{/* кнопки */}
				<div className='flex items-center gap-3'>
					<Button variant='outline' className='flex items-center gap-3'>
						<User size={16} />
						Войти</Button>
				</div>
			</Container>
		</header>
	);
};

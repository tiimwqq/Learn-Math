import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Button, Input } from '../ui';
import { Search, User } from 'lucide-react';
import { Navigation } from './navigation';
import Link from 'next/link';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* левая часть */}
				<Link href={'/'}>
					<div className='flex items-center gap-4'>
						<h1 className='text-2xl font-black'>Learn Math</h1>
					</div>
				</Link >
				{/* навигация и поиск */}
				<Navigation />
				<div className={cn('w-1/3 relative ')}>
					<Search className={cn('absolute top-2.5 left-3 divide-gray-500')} size={16} />
					<Input className={cn('pl-9')} placeholder='Поиск' />
				</div>
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

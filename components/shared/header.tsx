import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				{/* левая часть */}
				<div className='flex items-center gap-4'>
					<h1 className='text-2xl font-black'>Learn Math</h1>
				</div>
				<div className='flex items-center gap-3'>
					<Button variant='outline' className='flex items-center gap-3'>
						<User size={16}/>
						Войти</Button>
				</div>
			</Container>
		</header>
	);
};

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const list = [{ title: 'Формулы', path: '/formulas' }, { title: 'Таблицы', path: '/tables' }, { title: 'тесты', path: '/tests' }, { title: 'О нас', path: '/about' }]

type Props = {
	className?: string;
};

export const Navigation: React.FC<Props> = ({ className }) => {
	return (
		<nav className={cn('',)}>
			<ul className={cn(className)}>
				{list.map((item, i) => (
					<li key={i}>
						<Link href={item.path}>{item.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};


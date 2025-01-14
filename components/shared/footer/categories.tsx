import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from '../title';
import { Navigation } from '../header/navigation';

type Props = {
	// Определите пропсы здесь
};

const Categories: React.FC<Props> = ({ }) => {
	return (
		<div className={cn('w-[126px]')}>
			<Title text="СОДЕРЖАНИЕ" size='xs' className="font-normal mb-3" />
			<Navigation className={'text-[#A7A7A7] text-sm flex flex-col space-y-2'} />
		</div >
	);
};

export default Categories;
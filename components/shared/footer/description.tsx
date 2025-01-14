import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
	// Определите пропсы здесь
};

const Decription: React.FC<Props> = ({ }) => {
	return (
		<div className={cn('w-[280px]')}>
			<div className={cn('text-[#8AC90A] text-3xl font-black mb-3')}>Learn Math</div>
			<p className={cn('text-[#c4c4c4]')}>Learn Math — это образовательная платформа, где вы найдете интерактивные уроки, упражнения и пошаговые объяснения, чтобы освоить математику с нуля до продвинутого уровня.</p>
		</div>
	);
};

export default Decription;
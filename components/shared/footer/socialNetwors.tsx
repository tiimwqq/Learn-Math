import React from 'react';
import { Title } from '../title';
import { cn } from '@/lib/utils';
import { Instagram, Github, Twitter, Facebook } from 'lucide-react';

type Props = {
	// Определите пропсы здесь
};

const SocialNetworks: React.FC<Props> = ({ }) => {
	return (
		<div className={cn('w-[200px]')}>
			<Title text="НАШИ СОЦ СЕТИ" size="xs" className="font-normal mb-3" />
			<div className={cn('flex gap-3 text-[#A7A7A7]')}>
				<Instagram size={20} />
				<Github size={20} />
				<Twitter size={20} />
				<Facebook size={20} />
			</div>
		</div >
	);
};

export default SocialNetworks;
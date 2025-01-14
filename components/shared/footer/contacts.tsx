import React from 'react';
import { Title } from '../title';
import { cn } from '@/lib/utils';
import { Mail, Phone } from 'lucide-react';

type Props = {
	// Определите пропсы здесь
};

const Contacts: React.FC<Props> = ({ }) => {
	return (
		<div className={cn('w-[185px]')}>
			<Title text="КОНТАКТЫ" size="xs" className="font-normal mb-3" />
			{/* Номер телефона */}
			<div className={cn('flex flex-col space-y-2 text-[#A7A7A7] text-sm')}>
				<div className={cn("flex gap-1")}>
					<Phone size={16} />
					<a href="tel:+4055550128" >(405) 555-0128</a>
				</div>
				<div className={cn("flex gap-1")}>
					<Mail size={16}/>
					<a href="mailto:learnmath@gmail.com" >learnmath@gmail.com</a>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '../../ui';
import React from 'react';

type Props = {
	
};

const SearchBar: React.FC<Props> = ({ }) => {
	return (
		<div className={cn('w-1/3 relative ')}>
			<Search className={cn('absolute top-2.5 left-3 divide-gray-500')} size={16} />
			<Input className={cn('pl-9')} placeholder='Поиск' />
		</div>
	);
};

export default SearchBar;
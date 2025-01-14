import Link from 'next/link';
import React from 'react';

type Props = {
};

const Logo: React.FC<Props> = ({ }) => {
	return (
		<Link href={'/'}>
			<div className='flex items-center gap-4'>
				<h1 className='text-2xl font-black'>Learn Math</h1>
			</div>
		</Link >
	);
};

export default Logo;
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type TopicCardProps = {
	title: string;
	slug: string;
	subtopics: { name: string; slug: string }[];
	index: number;
};

export const TopicSection: React.FC<TopicCardProps> = ({ title, slug, subtopics, index }) => {
	return (
		<div className={cn('w-[340px] h-[400px] border border-black rounded-2xl p-6')}>
			<div className={cn('border-b-[1px] pb-8 mb-8 border-black flex justify-between h-[70px]')}>
				<h2 className={cn('font-medium text-lg w-[235px]')} >{title}</h2>
				<div
					className={cn(
						'w-8 h-8 bg-zinc-900 rounded-[50%] text-white flex justify-center items-center '
					)}
				>
					{index}
				</div>
			</div>
			<ul className={cn('text-[#22222] text-sm flex flex-col space-y-2')}>
				{subtopics.map((subtopic) => (
					<li key={subtopic.slug}>
						<Link href={`/topics/${slug}/${subtopic.slug}`}>
							{subtopic.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};


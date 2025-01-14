import React from 'react';
import { Container, Title } from './shared';
import { cn } from '@/lib/utils';
import { TopicSection } from './topicSection';
import { topics } from '@/lib/topics';

type Props = {
	className?: string;
};

export const TopicsOverview: React.FC<Props> = ({ className }) => {
	return (
		<Container className={cn('mt-[150px] mb-[80px]')}>
			<Title text="Содержание" size="md" className={cn('font-[800] text-center mb-6', className)} />
			<section className={cn('flex flex-wrap justify-between gap-x-[82px] gap-y-[40px]',
				'sm:basis-1/2 md:basis-1/3 lg:basis-1/4')}>
				{topics.map((topic, index) => <TopicSection key={index} title={topic.title} slug={topic.slug} subtopics={topic.subtopics} index={index + 1} />)}
			</section>
		</Container>
	);
};


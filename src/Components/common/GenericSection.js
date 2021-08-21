import * as React from 'react';
import { GenericCard } from './GenericCard';
import { GenericTitle } from './GenericTitle';
import { Stack, HStack, Flex, Grid, Skeleton, } from '@chakra-ui/react';
export const GenericSection = ({ title = '', data = [], endpoint = '#' }) => {
	const WINDOW_WIDTH = parseInt(window.innerWidth * 0.95);
	const CARD_FIXED_SIZE = 320;
	const FITTABLE_CARD_CONTAINERS = Math.floor(WINDOW_WIDTH / CARD_FIXED_SIZE);
	const FITTABLE_CARD_DATA = data.length;
	const ROW_ENTRIES = FITTABLE_CARD_DATA < FITTABLE_CARD_CONTAINERS ? FITTABLE_CARD_DATA : FITTABLE_CARD_CONTAINERS;
	const SectionLoader = ({ isLoading = false, children }) => {
		const SkeletonBoxes = () => Array(ROW_ENTRIES).fill(
			<Skeleton 
				h={{ base: '75vh', sm: '256px', md: '256px' }}
				w={'100%'}
			/>
			, 0); 
		return isLoading ? <Stack p="5" bgColor="white" width="100%" direction="column">
			<Skeleton height="40vh"/>
			<HStack justify="space-evenly">
				<SkeletonBoxes />
			</HStack>
		</Stack> : children;
	};
	const ListItems = () =>
		data.map((datum) => (
			<GenericCard
				key={`card#${datum.id}`}
				endpoint={`/${endpoint + '/' + datum.id}`}
				{...datum}
			/>
		));
	const SectionList = () => (
		<Grid
			my="5"
			alignItems="center"
			justifyItems="center"
			rowGap={5}
			templateColumns={{
				base: 'repeat(1, auto)',
				sm: 'repeat(2, auto)',
				lg: 'repeat(3, space-between)',
				xl: `repeat(${ROW_ENTRIES}, auto)`,
			}}
			w="100%"
			p="0"
			// eslint-disable-next-line react/no-children-prop
			children={<ListItems />}
		/>
	);
	return (
		<Flex w="100%" p="5" direction="column" justify="center">
			<SectionLoader isLoading={!data.length}>
				<GenericTitle textStyles={{textShadow:''}} src="" text={title} />
				<SectionList />
			</SectionLoader>
		</Flex>
	);
};

import dynamic from 'next/dynamic';

import { Banner } from '@/components/banner';
import { Navigation } from '@/components/navigation';
import { getCoordinateData } from '@/data/coordinates';

const Map = dynamic(async () => (await import('./components/map')), {
	ssr: false,
});

export default async function Home() {
	const coordinates = await getCoordinateData();
	const circlesCoordinates = coordinates.data.map(
		({ coordinates }) => ([coordinates[1], coordinates[0]])
	) as [number, number][];
	return (
		<>
      			<Navigation />
			<Banner title="" />
			<Map circlesCoordinates={circlesCoordinates} />
		</>
	);
}

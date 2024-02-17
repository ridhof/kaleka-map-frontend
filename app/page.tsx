import dynamic from 'next/dynamic';

import { Banner } from '@/components/banner';
import { Navigation } from '@/components/navigation';

const Map = dynamic(async () => (await import('./components/map')), {
	ssr: false,
});

export default function Home() {
	const circlesCoordinates = [
		[-1.1057614895977395, 113.87535787965106],
		[-1.0207845828238362, 116.9814126725039],
	] as [number, number][];
	return (
		<>
      			<Navigation />
			<Banner title="" />
			<Map circlesCoordinates={circlesCoordinates} />
		</>
	);
}

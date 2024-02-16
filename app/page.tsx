import dynamic from 'next/dynamic';

import { Banner } from '@/components/banner';
import { Navigation } from '@/components/navigation';

const Map = dynamic(async () => (await import('./components/map')), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			<Navigation />
			<Banner title="" />
			<Map />
		</>
	);
}

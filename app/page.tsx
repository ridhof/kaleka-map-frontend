"use client"

import { Banner } from '@/components/banner';
import { Map } from '@/components/map';
import { Navigation } from '@/components/navigation';

export default function Home() {
	return (
		<>
			<Navigation />
			<Banner title="" />
			<Map />
		</>
	);
}

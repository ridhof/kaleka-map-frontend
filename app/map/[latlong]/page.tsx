import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Banner } from '@/components/banner';
import { Navigation } from '@/components/navigation';

const Map = dynamic(async () => (await import('../../components/map')), {
	ssr: false,
});

function getLatLong(latlong: string): [number, number] {
	const [lat, long] = latlong.slice(3, latlong.length).split('%2C');
	return [parseFloat(lat), parseFloat(long)];
}

interface MapDetailPageProps {
	params: {
		latlong: string,
	},
};

export default function MapDetailPage({ params }: MapDetailPageProps) {
	const { latlong } = params;

	const regExp = new RegExp(
		'^%40(-?[0-9]{1,2}?(\.[0-9]+)?)%2C(-?[0-9]{1,3}?(\.[0-9]+)?)$'
	);
	const regexOk = regExp.test(latlong);
	if (!regexOk) {
		return (
			<>
				<Navigation />
				<Banner title="Detail Coordinate" />
				<div className="mx-4 my-6 md:my-10 text-[14px] flex flex-col items-center">
					<p>Titik tidak ditemukan.</p>
					<Link
						href="/"
						className="my-4 px-3 py-2 border border-black rounded bg-black text-[#F8BE1A] font-bold hover:opacity-80"
					>
						Kembali ke Beranda
					</Link>
				</div>
			</>
		);
	}

	const [lat, long] = getLatLong(latlong);

	return (
		<>
			<Navigation />
			<Banner title="Detail Coordinate" />
			<Map circlesCoordinates={[[lat, long]]} />
			<p className="mb-10 text-[14px] font-bold text-center">
				Coordinate Details: { lat }, { long }
			</p>
		</>
	);
}

"use client"

import Link from 'next/link';
import { useState } from 'react';
import {
	Circle,
	FeatureGroup,
	Marker,
	Popup,
} from 'react-leaflet';

import { LeafletContainer } from '@/components/leaflet-container';
import { MapEventHandler } from '@/components/map-event-handler';

import 'leaflet/dist/leaflet.css';

interface MapProps {
	circlesCoordinates: [number, number][],
};

function Map({ circlesCoordinates }: MapProps) {
	const [zoom, setZoom] = useState<number>(
		window.innerWidth <= 768 ? 3 : (
			window.innerWidth <= 1024 ? 4 : 5
		)
	);
	const [radius, setRadius] = useState<number>(calculateRadius(zoom));
	const center: [number, number] = [-2.2910, 117.7737];

	function onZoomClick(newZoomValue: number) {
		setZoom(newZoomValue);
		setRadius(calculateRadius(newZoomValue));
	}

	function calculateRadius(zoomValue: number): number {
		return 800000 / ((zoomValue - 1) ** 1.8);
	}

	let circles = null;
	if (circlesCoordinates && circlesCoordinates.length > 0) {
		circles = circlesCoordinates.map((position, index) =>
			<FeatureGroup
				key={index}
			>
				<Popup>
					<Link
						href={`/map/@${position[0]},${position[1]}`}
					>
						<span
							className="text-xs font-bold text-red-400"
						>
							LIHAT DETAIL
						</span>
					</Link>
				</Popup>
				<Circle center={position} radius={radius} />
			</FeatureGroup>
		);
	}

	return (
		<LeafletContainer
			center={center}
			zoom={zoom}
			className="my-6 h-[40vh] md:w-[90vw] mx-auto md:my-10 md:h-[80vh]"
			scrollWheelZoom={false}
		>
			{circles}
			<MapEventHandler zoomendEvent={onZoomClick} />
		</LeafletContainer>
	);
};

export default Map;

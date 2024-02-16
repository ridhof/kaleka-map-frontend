"use client"

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

function Map() {
	const [zoom, setZoom] = useState<number>(
		window.innerWidth <= 768 ? 3 : (
			window.innerWidth <= 1024 ? 4 : 5
		)
	);
	const [radius, setRadius] = useState<number>(calculateRadius(zoom));
	const center: [number, number] = [-2.2910, 117.7737];
	const circlesCoordinates: [number, number][] = [
		[-1.1057, 113.8753],
		[-1.0207, 116.9814],
	];

	function onZoomClick(newZoomValue: number) {
		setZoom(newZoomValue);
		setRadius(calculateRadius(newZoomValue));
	}

	function calculateRadius(zoomValue: number): number {
		return 800000 / ((zoomValue - 1) ** 1.8);
	}

	const circles = circlesCoordinates.map((position, index) =>
		<Circle key={index} center={position} radius={radius} />
	);

	return (
		<LeafletContainer
			center={center}
			zoom={zoom}
			className="my-6 h-[40vh] md:w-[90vw] mx-auto md:my-10 md:h-[80vh]"
			scrollWheelZoom={false}
		>
			<FeatureGroup>
				<Popup>
					<button className="font-xs text-red-400 font-bold">
						LIHAT DETAIL
					</button>
				</Popup>
				{circles}
			</FeatureGroup>
			<MapEventHandler zoomendEvent={onZoomClick} />
		</LeafletContainer>
	);
};

export default Map;

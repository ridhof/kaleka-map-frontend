import { useMapEvents } from 'react-leaflet';

interface MapEventHandlerProps {
	zoomendEvent: (zoom: number) => void,
};

function MapEventHandler({ zoomendEvent }: MapEventHandlerProps) {
	const map = useMapEvents({
		zoomend(e) {
			zoomendEvent(e.target._zoom);
		},
	});
	return null;
};

export { MapEventHandler };

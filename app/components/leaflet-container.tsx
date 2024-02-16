import { MapContainer, TileLayer } from 'react-leaflet';

const LeafletContainer: FC<
	{
		center: [number, number],
		children: ReactNode,
		zoom: number,
	} & MapOptions
> = ({ children, ...options }) => {
	return (
		<MapContainer
			className="h-[200px] w-full relative"
			minZoom={3}
			maxZoom={10}
			{...options}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        			url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
			/>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{children}
		</MapContainer>
	);
}

export { LeafletContainer };

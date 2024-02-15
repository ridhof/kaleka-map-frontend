import Image from 'next/image';

interface SidebarButtonProps {
	imageSrc: any,
	alt: string,
	height: number,
	className: string,
	onClick: () => void,
}

function SidebarButton({
	imageSrc,
	alt,
	height,
	className,
	onClick,
}: SidebarButtonProps) {
	return (
		<>
			<button
				onClick={onClick}
				className="md:hidden hover:opacity-80"
			>
				<Image 
					src={imageSrc}
					alt={alt}
					height={height}
					className={className}
				/>
			</button>
		</>
	);
}

export { SidebarButton };

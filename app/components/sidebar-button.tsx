import Image from 'next/image';
import { SVGProps } from 'react';

interface SidebarButtonProps {
	imageSrc: SVGProps<SVGSVGElement>,
	alt: string,
	height: int,
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

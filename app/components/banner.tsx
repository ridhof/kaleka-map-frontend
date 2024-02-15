import Image from 'next/image'

import BannerImage from '@/images/kaleka-banner.png';

interface BannerProps {
	title: string,
}

function Banner({ title }: BannerProps) {
	return <div
		className="relative"
	>
		<Image
			src={BannerImage}
			alt="Kaleka image banner"
			className="object-cover object-left h-[28vh] w-full"
		/>
		<div className="absolute inset-0 top-1/2">
			<p className="text-white font-bold text-[24px] uppercase text-center">
				{ title }
			</p>
		</div>
	</div>;
}

export { Banner }

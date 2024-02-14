import Image from 'next/image';
import Link from 'next/link';
import logoTextImage from '@/images/kaleka-logo-with-text.svg';

function Navigation() {
	return (
		<div
			className="p-3 py-auto relative bg-black min-h-[10vh]"
		>
			<Image
				src={logoTextImage}
				alt="Kaleka logo with text"
				height={40}
				className="absolute py-auto"
			/>
			<div
				className="h-[6vh] flex justify-center gap-x-[4vw] text-[#F8BE1A] hover:text-[#F8AA2F] font-bold text-[14px] uppercase"
			>
				<Link href="/" className="p-2 my-auto">Beranda</Link>
				<Link href="/about" className="p-2 my-auto">Tentang Kami</Link>
			</div>
		</div>
	);
}

export { Navigation };

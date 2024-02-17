import Link from 'next/link';

import { NavigationItemProps  } from '@/components/navigation';

interface NavigationBarMobileProps {
	items: NavigationItemProps[],
}

function NavigationBarMobile({ items }: NavigationBarMobileProps) {
	const navs = items.map(({ url, title }: NavigationItemProps) => {
		return (
			<Link
				key={url}
				href={url}
				className="p-2 hover:opacity-80"
			>
				{title}
			</Link>
		);
	});
	return (
		<div className="md:hidden absolute inset-0 top-14 z-10 bg-black h-screen min-w-[250px]">
			<div className="p-4 text-[#F8BE1A] font-bold text-[14px] uppercase flex flex-col justify-center">
				{ navs }
			</div>
		</div>
	);
}

export { NavigationBarMobile };

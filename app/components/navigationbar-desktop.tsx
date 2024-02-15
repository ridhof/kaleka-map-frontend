import Link from 'next/link';

import { NavigationItemProps } from '@/components/navigation'

interface NavigationBarDesktopProps {
	items: NavigationItemProps[],
}

function NavigationBarDesktop({ items }: NavigationbarDesktopProps) {
	const navs = items.map(({ url, title }: NavigationItemProps) => {
		return (
			<Link
				key={url}
				href={url}
				className="p-2 my-auto hover:opacity-80"
			>
				{title}
			</Link>
		);
	});

	return <div
		className="invisible md:visible absolute inset-0 flex justify-center gap-x-[4vw] text-[#F8BE1A] font-bold text-[14px] uppercase"
	>
		{navs}
	</div>;
}

export { NavigationBarDesktop }

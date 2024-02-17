"use client"

import Image from 'next/image';
import Link from 'next/link';
import { SVGProps, useState } from 'react';

import { SidebarButton } from '@/components/sidebar-button';
import { NavigationBarDesktop } from '@/components/navigationbar-desktop';
import { NavigationBarMobile } from '@/components/navigationbar-mobile';
import bars from '@/images/bars.svg';
import cross from '@/images/cross.svg';
import logoTextImage from '@/images/kaleka-logo-with-text.svg';

interface NavigationItemProps {
	url: string,
	title: string,
}

function Navigation() {
	const [showSidebar, setShowSidebar] = useState<boolean>(false);
	const items: NavigationItemProps[]  = [
		{ url: "/", title: "Beranda" },
		{ url: "/about", title: "Tentang Kami" },
	];

	function handleSidebarClick() {
		setShowSidebar(!showSidebar);
	}

	return (
		<>
			<div
				className="relative p-3 py-auto flex relative bg-black min-w-[250px]"
			>
				<SidebarButton
					onClick={handleSidebarClick}
					imageSrc={showSidebar ? cross : bars}
					alt="Cross icon to close menu bars"
					height={40}
					className="mx-1 p-1"
				/>
				<Image
					src={logoTextImage}
					alt="Kaleka logo with text"
					height={40}
					className="m-auto md:m-0 py-auto absolute inset-3 md:relative md:inset-0"
				/>
				<NavigationBarDesktop items={items} />
			</div>
			{ showSidebar && <NavigationBarMobile items={items} /> }
		</>
	);
}

export { Navigation };
export type { NavigationItemProps };

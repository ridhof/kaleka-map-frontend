import { Banner } from '@/components/banner';
import { Navigation } from '@/components/navigation';

export default function About() {
	return (
		<>
			<Navigation />
			<Banner title="Tentang Kami" />
			<div
				className="mx-4 my-6 md:w-[90vw] md:mx-auto md:my-10 text-[14px] flex flex-col gap-y-3 leading-relaxed"
			>
				<p>
					Kaleka (formerly Yayasan Inobu) is an Indonesian, non-profit organization that strives forward the sustainable management of Indonesian&apos;s landscapes and seascapes for the benefit of local and indigenous communties. Founded in 2014, Kaleka is a woman-led organization, where the Executive Director and majority of managers and staff are women. With over 60 staff now, our staff represent the diversity of peoples in the Indonesian archipelago, all committed to upholding human rights and protecting the environment. Kaleka&apos;s thematic strengths are in the areas of sustainable sourcing, conservation and restoration, agri-food systems, community development and environmental and social governance.
				</p>
				<p>
					At the heart of Kaleka&apos;s approach, is the concept of Collaborative, Action Research. Before commencing any work, we work with our partners, including the government at the national and sub-national levels, civil society organizations, producer, manufacturing and consumer-facing companies, universities, farmers and local communities, to identify their priorities. Through researching best practices in science, while incorporating local and indegenous knowledge, we test, implement, evaluate and refine innovations. This approach ensures the acceptability and relevance of interventions to local partners while also allowing us to scale nationally.
				</p>
				<p>
					<span className="font-bold underline underline-offset-4">
						Vision
					</span>
					<br />
					Aspire for an Indonesia where land and seascapes are managed sustainably and benefit the communities that depend on them.
				</p>
				<p>
					<span className="font-bold underline underline-offset-4">
						Mission
					</span>
					<br />
					Improve public policies and strengthen civil society through innovative research, policy analysis, technology and alliance-building to sustainably manage Indonesia&apos;s natural resources and agricultural production system, throughout the life-cycle of products.
				</p>
				<p>
					<span className="font-bold underline underline-offset-4">
						Purpose
					</span>
					<br />
					To work with farmers, including younger generations, to protect nature.
					We aim to achieve our vision and mission through our four strategic initiatives.
				</p>
			</div>
		</>
	);
}

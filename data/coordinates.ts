interface getCoordinateDataResponse {
	data: {
		coordinates: [number, number],
	}[],
	count: number,
}

async function getCoordinateData(): Promise<getCoordinateDataResponse> {
	const res = await fetch(
		[
			process.env.API_BASE_URL,
			process.env.API_VERSION,
			'07e88d94-b1de-4e13-89c3-1851cc16019b',
		].join('/'),
		{ next: { revalidate: 10 } },
	);
	if (!res.ok) {
		return {
			data: [],
			count: 0,
		};
	}

	return res.json();
};

export type { getCoordinateDataResponse };
export { getCoordinateData };

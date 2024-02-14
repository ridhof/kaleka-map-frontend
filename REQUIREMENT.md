# Requirement

[Figma](https://www.figma.com/file/S8hkTIkHzTP6aMkUmEPC3f/Kaleka-Web-Test?type=design&node-id=0-1&mode=design)

## Pages

### Home - General Map

- navigation (logo on left, BERANDA and TENTANG KAMI at center), yellow, inter, bold, 20
- banner
- general map shows all coordinates with clickable shows LIHAT DETAIL

### Detail Coordinate

- navigation
- banner with Text (DETAIL COORDINATE), white, inter, bold, 32
- general map shows only 1 selected coordinate
- show coordinate as a text at bottom (Coordinate Details: 113.87535787965106, -1.1057614895977395), black, inter, bold, 20

### About Us

- navigation
- banner with Text (TENTANG KAMI)
- texts, black, inter, regular, 18

```
Kaleka (formerly Yayasan Inobu) is an Indonesian, non-profit organization that strives forward the sustainable management of Indonesian's landscapes and seascapes for the benefit of local and indigenous communties. Founded in 2014, Kaleka is a woman-led organization, where the Executive Director and majority of managers and staff are women. With over 60 staff now, our staff represent the diversity of peoples in the Indonesian archipelago, all committed to upholding human rights and protecting the environment. Kaleka's thematic strengths are in the areas of sustainable sourcing, conservation and restoration, agri-food systems, community development and environmental and social governance.

At the heart of Kaleka's approach, is the concept of Collaborative, Action Research. Before commencing any work, we work with our partners, including the government at the national and sub-national levels, civil society organizations, producer, manufacturing and consumer-facing companies, universities, farmers and local communities, to identify their priorities. Through researching best practices in science, while incorporating local and indegenous knowledge, we test, implement, evaluate and refine innovations. This approach ensures the acceptability and relevance of interventions to local partners while also allowing us to scale nationally.

_**Vision**_
Aspire for an Indonesia where land and seascapes are managed sustainably and benefit the communities that depend on them.

_**Mission**_
Improve public policies and strengthen civil society through innovative research, policy analysis, technology and alliance-building to sustainably manage Indonesia's natural resources and agricultural production system, throughout the life-cycle of products.

_**Purpose**_
To work with farmers, including younger generations, to protect nature.
We aim to achieve our vision and mission through our four strategic initiatives.
```

## Tech Requirement

- use React.Js/Next.Js/Vue.Js framework
- use Typesript
- use Tailwindcss
- maintain responsive in Mobile and Tablet (burger menu)
- use geo/map library like Leaflet
- integrate to API endpoint (GET https://run.mocky.io/v3/07e88d94-b1de-4e13-89c3-1851cc16019b)
- show coordinates from API in the geo/map library as a circle that follows its coordinate
- make sure that clicking coordinates will show a pop up, then clicking the pop up will open up another page

## API Endpoint

Example response:

```json
{
    "data": [
        {
            "coordinates": [
                113.87535787965106,
                -1.1057614895977395
            ]
        },
        {
            "coordinates": [
                116.9814126725039,
                -1.0207845828238362
            ]
        }
    ],
    "count": 2
}
```

## Colors

### Text

- yellow, #F8BE1A
- black, #000000
- white, #FFFFFF

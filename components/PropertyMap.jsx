'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import LoadingPage from '@/app/loading';

function PropertyMap({ property }) {
	const [coords, setCoords] = useState(null);
	const {
		location: { street, city, state, zipcode },
	} = property;
	const fullAddress = `${street} ${city} ${state} ${zipcode}`;
	useEffect(() => {
		async function getCoordinates() {
			const uri = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY}&address=${fullAddress}`;
			const eUri = encodeURI(uri);
			const { results } = await (await fetch(eUri)).json();
			// console.log('result', results);
			if (results[0]) setCoords(results[0].geometry.location);
		}
		getCoordinates();
	}, []);

	if (!coords) return <LoadingPage />;
	return (
		<>
			<div id='map'></div>
			<Script
				src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
				integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
				crossorigin=''
				type='module'
				onLoad={() => {
					var map = L.map('map').setView([coords.lat, coords.lng], 13);
					L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
						attribution:
							'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
					}).addTo(map);
					L.marker([coords.lat, coords.lng])
						.addTo(map)
						.bindPopup(`${fullAddress} <br /> ${property.name} House.`)
						.openPopup();
				}}></Script>
		</>
	);
}

export default PropertyMap;

import React, { useEffect } from 'react';
// import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxGl = ({ locations }) => {
    useEffect(() => {
        const mapboxgl = window.mapboxgl;
        mapboxgl.accessToken =
            'pk.eyJ1Ijoibm9semFydCIsImEiOiJja2hhcmYyOGEwOGtsMnluOHZwZTJ2NXFlIn0.HPmAIutT5cIh1Hs3BiAphg';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/nolzart/ckharx96i0cn519oba4bgxy6t',
        });

        const bounds = new mapboxgl.LngLatBounds();

        locations.forEach(loc => {
            const el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker({
                element: el,
                anchor: 'bottom',
            })
                .setLngLat(loc.coordinates)
                .addTo(map);

            new mapboxgl.Popup({ offset: 30 })
                .setLngLat(loc.coordinates)
                .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
                .addTo(map);

            bounds.extend(loc.coordinates);
        });

        map.fitBounds(bounds, {
            padding: {
                top: 200,
                bottom: 140,
                left: 100,
                right: 100,
            },
        });
    }, []);

    return <div id='map'></div>;
};

export default MapboxGl;

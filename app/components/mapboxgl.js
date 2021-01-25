import React from 'react';
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1Ijoibm9semFydCIsImEiOiJja2hhcmYyOGEwOGtsMnluOHZwZTJ2NXFlIn0.HPmAIutT5cIh1Hs3BiAphg',
});

export const MapBox = ({ tour }) => {
    const bounds = tour.locations.map(loc => loc.coordinates);
    return (
        <Map
            // eslint-disable-next-line react/style-prop-object
            style='mapbox://styles/nolzart/ckharx96i0cn519oba4bgxy6t'
            scrollZoom={false}
            fitBounds={bounds}
            fitBoundsOptions={{
                padding: {
                    top: 200,
                    bottom: 140,
                    left: 100,
                    right: 100,
                },
            }}
            id='map'
            className='section-map'
        >
            {/* {tour.locations.map(loc => (
                <React.Fragment key={loc._id}>
                    <Marker coordinates={loc.coordinates} anchor='bottom'>
                        <div className='marker'></div>
                    </Marker>
                    <Popup coordinates={loc.coordinates} offset={30}>
                        <p>
                            Day {loc.day}: {loc.description}
                        </p>
                    </Popup>
                </React.Fragment>
            ))} */}
            {tour.locations.map(loc => (
                <Marker
                    coordinates={loc.coordinates}
                    anchor='bottom'
                    key={`marker-${loc._id}`}
                >
                    <div className='marker'></div>
                </Marker>
            ))}
            {tour.locations.map(loc => (
                <Popup
                    coordinates={loc.coordinates}
                    offset={30}
                    key={`popup-${loc._id}`}
                >
                    <p>
                        Day {loc.day}: {loc.description}
                    </p>
                </Popup>
            ))}
        </Map>
    );
};

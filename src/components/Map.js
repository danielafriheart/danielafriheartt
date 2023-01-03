import React from 'react'
import { Annotation, ComposableMap, Geographies, Geography, Graticule, Marker } from 'react-simple-maps'

export default function Map() {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


    return (
        <div className='md:h-85vh relative hidden md:flex'>
            <div className='text-white opacity-[3%] text-[10em] absolute right-20 top-0 text-right h2'>Based in <br /> Lagos, Nigeria.</div>

            <div className=" h-full w-[85vw] sm:w-[95vw] lg:w-[100%] mx-auto gap-10 grid">
                <ComposableMap
                    projectionConfig={{
                        // rotate: [-10.0, -53.0, 0],
                        center: [15, 5],
                        scale: 350,
                    }}
                    // height={`${'md:' ? 400 : 600}`}
                    // height={'md' ? 300 : 600}
                    height={300}
                    className='cursor-pointer'
                >
                    <Graticule stroke="#333" width={[1]} />
                    <Geographies geography={geoUrl} className=''>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    stroke={'#1E1D22'}
                                    style={{
                                        default: {
                                            fill: "#242328",
                                        },
                                        hover: {
                                            fill: "#9D84B8",
                                        },
                                        pressed: {
                                            fill: "#CF95FC",
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    <Marker coordinates={[9.072264, 7.491302]}>
                        <circle r={5} fill='#CF95FC' />
                    </Marker>
                    <Annotation
                        subject={[9.072264, 7.491302]}
                        dx={-90}
                        dy={-30}
                        connectorProps={{
                            stroke: "#CF95FC",
                            strokeWidth: 1,
                            strokeLinecap: "round",
                        }}
                        curve={1}
                    >
                        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#CF95FC">
                            {"Lagos, Nigeria"}
                        </text>
                    </Annotation>
                </ComposableMap>
            </div>
        </div >
    )
}

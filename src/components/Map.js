import React from 'react'
import { Annotation, ComposableMap, Geographies, Geography, Graticule, Marker } from 'react-simple-maps'

export default function Map() {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


    return (
        <div className='h-85vh relative' data-scroll-section>
            {/* <div className='text-white opacity-[3%] text-[4.5em] md:text-[10em] absolute md:left-20 top-0 text-left h2 z-10'>Based in <br /> Lagos, Nigeria.</div> */}

            <div className=" h-full w-[100%] mx-auto gap-10 grid z-20">
                <ComposableMap
                    projectionConfig={{
                        center: [15, 5],
                        scale: 350,
                    }}
                    className='cursor-pointer md:h-[100vh] w-[100%]'
                >
                    <Graticule stroke="#333" width={[1]} />
                    <Geographies geography={geoUrl}>
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

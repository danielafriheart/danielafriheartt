import React from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Marker } from 'react-simple-maps'
import { GrMapLocation } from 'react-icons/gr'

export default function Map() {

    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    return (
        <div className=' h-full relative pt-20'>
            {/* <div className='text-white opacity-[2%] text-[10em] absolute left-20 top-10 text-left h2'>Based in <br /> Lagos.</div> */}
            <div className="grid md:grid-cols-[1fr,2fr] h-full w-[85vw] sm:w-[95vw] lg:w-[80vw] mx-auto gap-10 md:gap-0">
                <div>
                    <div className="flex flex-col gap-8">
                        <span className='flex md:text-5xl text-3xl gap-3'>
                            <p className='text-primary'><GrMapLocation /></p>
                            <h2 className='text-white'>Lagos, <br /> Nigeria</h2>
                            <p className='bg-primary-100 w-full h-[1px] my-auto'></p>
                        </span>

                    </div>
                </div>
                <ComposableMap
                    projectionConfig={{
                        // rotate: [-10.0, -53.0, 0],
                        center: [35, 25],
                        scale: 400,
                    }}
                    className='cursor-pointer'
                >
                    <Graticule stroke="#3e3e3e" width={[1]} />
                    <Geographies geography={geoUrl} className='opacity-100'>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    stroke={'#333'}
                                    style={{
                                        default: {
                                            fill: "#ABB2BF",
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
                    <Marker coordinates={[6.465422, 3.406448]}>
                        <circle r={8} fill='#CF95FC' />
                    </Marker>
                </ComposableMap>
            </div>
        </div >
    )
}

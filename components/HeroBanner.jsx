

import React from 'react';

import { urlFor } from '../lib/client';

import Link from 'next/link'

const HeroBanner = ( {heroBanner} ) => {
	return (
		<div className="hero-banner-container">
			<div>
				{/* current implementation doesn't support offers, if need be
				uncomment this */}

				{/* <p className="beats-solo"> {heroBanner.smallText}</p>
				<h3>{heroBanner.midText}</h3>
				<h1>{heroBanner.largeText}</h1> */}
				<img src={urlFor(heroBanner.image)} alt="taduka logo" className="hero-banner-image" />

				<div>
					{/* <Link href="/product/ID">
						<button type="button">{heroBanner.buttonText}</button>
					</Link> */}
					
					{/* <div className="desc">
						<h5>Description</h5>
						<p>{heroBanner.desc}</p>
					</div> */}
				</div>
			</div>
		</div> 
	)
}

export default HeroBanner

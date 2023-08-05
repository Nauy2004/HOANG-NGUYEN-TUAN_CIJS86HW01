import React from 'react'
import './banner.css'
function Banner() {
    let src = '/src/jpg/img/'
    let banner = ['Banner-leg.jpg', 'banner-s.jpg', 'banner-s1.jpg']
    return (
        <div className='banner'>
            <div className="banner-left">
                <img src={src + banner[0]} alt=".." />
            </div>
            <div className="banner-right">
                <img src={src + banner[1]} alt=".." />
                <img src={src + banner[2]} alt=".." />
            </div>
        </div>
    )
}

export default Banner
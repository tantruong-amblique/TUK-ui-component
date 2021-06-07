import React from 'react'

import Media1 from "./aligned_to_bottom"

import Media2 from "./aligned_to_center"

import Media3 from "./basic"

import Media4 from "./basic_responsive"

import Media5 from "./media_on_right"

import Media6 from "./nested"

import Media7 from "./stretched_to_fit"

import Media8 from "./wide_responsive"

const MediaObject = () => {
    return (
        <div>
        <div className="text-4xl animate-pulse m-3 font-semibold">Media Object</div>
        <div className="text-xl animate-bounce  m-3 font-semibold">aligned_to_bottom</div>
            <Media1 />
            <div className="text-xl animate-bounce  m-3 font-semibold">aligned_to_center</div>
            <Media2 />
            <div className="text-xl animate-bounce  m-3 font-semibold">basic</div>
            <Media3 />
            <div className="text-xl animate-bounce  m-3 font-semibold">basic_responsive</div>
            <Media4 />
            <div className="text-xl animate-bounce  m-3 font-semibold">media_on_right</div>
            <Media5 />
            <div className="text-xl animate-bounce  m-3 font-semibold">nested</div>
            <Media6 />
            <div className="text-xl animate-bounce  m-3 font-semibold">stretched_to_fit</div>
            <Media7 />
            <div className="text-xl animate-bounce  m-3 font-semibold">wide_responsive</div>
            <Media8 />
         
        </div>
    )
}

export default MediaObject

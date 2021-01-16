import React from 'react'
import { homeObjOne, homeObjFour, homeObjThree, homeObjTwo } from '../../pages/HomePage/Data'
import HeroSection from '../HeroSection'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home

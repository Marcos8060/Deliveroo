import React from 'react'
import styled from 'styled-components'
import burger from '../assets/Images/burger7.png'

const Hero = () => {
  return (
    <>
    <HeroWrapper>
        <div className='flex'>
            <div className='w-1/2 mx-auto h-screen'>
              <h1>HELLO WORLD</h1>  
            </div>
            <div className='w-1/2 mx-auto bg-yellow h-screen'>
              <h1>I LOVE REACT</h1>
            </div>
        </div>
    </HeroWrapper>
    </>
  )
}

export default Hero

const HeroWrapper = styled.div`
 background-image: url()
`
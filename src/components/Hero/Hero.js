import React from 'react'
import styled from 'styled-components'
import { Button } from "../Button"
import herobg from "../../assets/Images/herobg.jpg"


const Hero = () => {
  return (
    <HeroContainer>
            
    <HeroContent>
        <HeroItems>
            <HeroH1> Safe and Reliable</HeroH1>
            <HeroB>SheCabs</HeroB>
                <HeroP>We will take you anywhere</HeroP>
                <NavBtn>
                 <Button primary="true"  round="true" Link to="/Ride">
                        Ride Now
                    </Button>
                </NavBtn> 
                </HeroItems> 
    </HeroContent>
</HeroContainer>

  )
}

export default Hero
 
const HeroContainer = styled.div`
    background: linear-gradient(180deg,rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.5) 0%,
    rgba(0,0,0,0.1) 100%),
    url(${herobg} ) no-repeat center;
    display: flex;
    justify-content: center;
    background-size:cover;
    height:100vh;
    width:100%;
    padding:0 1rem;
    margin-top: -80px;
    color:#000;
    position: relative;
    display:flex;
    justify-content:center;
    align-items: center;

`

const  HeroContent = styled.div `
z-index: 3;
height: calc (100vh-80px);
max-height: 100%;
padding: 0rem  calc((100vw-1300px)/2);
`

const HeroItems= styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1; 
    font-weight: bold;

`

const HeroH1= styled.h1 `
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 2rem;
    margin-left: 4rem;
    letter-spacing: 3px;
    padding: 0 1rem;
    `

const HeroP= styled.p`
    font-size: 1.85rem;
    margin-bottom: 3rem;
    font-weight: 400;
    `
    const HeroB= styled.p`
    font-size: clamp(1.25rem, 4vw, 3rem);
    margin-bottom: 0.75rem;
    font-weight: 500;
    `
 const NavBtn = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    @media screen and [max-width: 768px]{
    display: none;
    }
    `
  




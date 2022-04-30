import React from 'react'
import styled from 'styled-components' 
import rideBg from '../assets/Images/ride.jpg'
import Layout from "../components/Layout/Layout"




const Ride = () => {
  return (
    <Layout>
        <RideContainer>
            <RideContent>
                <h1>Get Exclusive Rides</h1>
                <p>Enter your "Pick up" and "Destination" locations</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor="ride">
                        <input type= "ride" placeholder='Enter your Pick up location $ Destination '/>
                        </label>
                        
                    </FormWrap>
                </form>
            </RideContent>
        </RideContainer>
        </Layout>
  )
}

export default Ride

const RideContainer=styled.div`
    background: linear-gradient(180deg,rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.5) 0%,
    rgba(0,0,0,0.1) 100%),
    url(${rideBg}) no-repeat center;
    background-size:cover;
    height:450px;
    width:100%;
    padding: 01 rem;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items: center;

    `

const RideContent=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }
    p {
        text-align: center;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        margin-bottom: 2rem;
    }
    form{
        z-index: 1;
        
    }

`
const FormWrap=styled.div`
input{
    padding: 1rem 1.5rem;
    outline: none;
    width: 350px;
    height: 48px;
    border-radius: 50px;
    border: none;
    margin-right: 1rem;
}
@media screen and (max-width: 768px)
{
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    input{
        margin-bottom: 1rem;
        width: 100%;
        margin-right: 0;
    }
}
`
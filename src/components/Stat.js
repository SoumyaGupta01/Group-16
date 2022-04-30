import React from 'react'
import styled from 'styled-components';
import { BsPersonCheckFill } from 'react-icons/bs';
import { BsAward } from 'react-icons/bs';
import { BsEmojiLaughing } from 'react-icons/bs';
import { BsBullseye } from 'react-icons/bs';
import StatBg from '../assets/Images/stat.jpeg';



const Stat = () => {
    return (
        <StatsContainer>
            <Heading>
                Why choose SheCabs?
            </Heading>

            <Wrapper>
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </StatsBox>
                    )
                })
                }
            </Wrapper>


        </StatsContainer>

    )
}

export default Stat

const StatsData = [
    {
        icon: (<BsPersonCheckFill />),
        title: "Verified Women drivers",
        desc: "90+ Women driver to your destination",
    },
    {
        icon: (<BsBullseye  />),
        title: "Secure and Safer Rides",
        desc: "An emergency alert button in cabs to ensure your safety",
    },

    {

        icon: (<BsAward  />),
        title: "24/7 Customer Service",
        desc: "Our Travel support team ensures your satisfation",
    },
    {
        icon: (<BsEmojiLaughing ccccccc />),
        title: "Cabs for Every Budget",
        desc: "We have cabs to suit every pocket",
    }
]

const StatsContainer = styled.div`
    width: 100%;
    background: linear-gradient(180deg,rgba(0,0,0,0) 130%, rgba(0,0,0,0.5) 0%,
    rgba(0,0,0,0.1) 0%),
    url(${StatBg}) no-repeat center;
    background-size:cover;
    padding: 4rem calc((100vw-1300px) /2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    margin-bottom: -20px;
`
const Wrapper = styled.div`
  
    display: grid;
    grid-template-columns: repeat (4, 1fr);
    grid-gap: 10px;
    @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    
    @media screen and (max-width: 500px){
     grid-template-rows: 1fr;
`
const StatsBox = styled.div`
        background: #ffffcc;
        height: 100%;
        width: 100%;
        margin-top: 0.5rem;
        padding: 1.5rem;
        border-radius: 20px;
        align-items: center;
`

const Icon = styled.div`
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
`

const Title = styled.div`
font-size: 1.5rem;
font-color: #000;
margin-bottom: 0.5 rem;
`
const Heading = styled.p`
    margin-top: 0.25rem;
    font-size: 3rem;
    background: #efffcc;
    border-radius: 10px;
`

const Desc = styled.p`
font-size: 1rem;
font-style: italic;

`
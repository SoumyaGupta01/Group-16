import React from 'react'
import styled from 'styled-components'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import ReviewBg from '../assets/Images/ReviewBg.jpg'
import ImageBg from '../assets/Images/image1.jpg'
import Image1Bg from '../assets/Images/image2.jpg'


const Reviews = () => {
    return (
        <ReviewContainer>
            <TopLine>
                Reviews
            </TopLine>
            <Description>
                What are our Women Riders saying?
            </Description>
            <ContentWrapper>
                <ColumnTwo>

                </ColumnTwo>
                <ColumnThree>
                </ColumnThree>
                <ColumnOne>
                    <Review>
                        <IoMdCheckmarkCircleOutline
                            css={`color: #3fffa8;
                                    font-size: 2rem;
                                    margin-buttom:1 rem;
                                    `}
                        />
                        <h3>Divya Singh</h3>
                        <p>"I found your service a 5 star experience.
                            I arrived at Delhi at 2am.
                            I emailed the support address, and received a reply saying they would update my driver.
                            The driver was awaiting at the arrivals hall for me, when we finally got there.
                            The women driver I communicated with was pleasant and cheerful.
                            I will definitely use your service again. Your service, and reliability, made a long stressful journey end positively. Thank you."
                    
                        </p>

                    </Review>
                </ColumnOne>

                <ColumnOne>
                    <Review>
                        <FaRegLightbulb css={`color: #3fffa8;
                                    font-size: 2rem;
                                    margin-buttom:1 rem;
                                    `} />
                        <h3>Sarla Ray</h3>
                        <p>"Everything went perfectly! Incredibly punctual, friendly drivers, and a very fast customer service that answered my questions within minutes the night before my return trip.
                            I highly recommend booking here, and will definitely do so again in the future."
                        </p>

                    </Review>
                </ColumnOne>



            </ContentWrapper>
        </ReviewContainer>
    )
}
export default Reviews

const ReviewContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    padding: 5rem calc((100vw-1300px) /2);
    color: #000;
    margin-bottom: -20px;
`
const TopLine = styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`
const Description = styled.div`
background: linear-gradient(180deg,rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.5) 0%,
rgba(0,0,0,0.1) 100%),
url(${ReviewBg}) no-repeat center;
background-size:cover;
height: 200px;
width:100%;
padding: 0 1rem;
color:#fcfcfc;
font-size: 50px;
margin-top: -0 3rem;
display:flex;
justify-content:center;
align-items: center;
`
const ContentWrapper = styled.div`
    display: grid;
    background:#f5f5ef;
    grid-template-columns: 1fr 1fr;
    padding:0 2rem;
    align-items:center;
    @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`
const ColumnOne = styled.div`
    background:#ffa366;
    display:grid;
    width:60%;
    height:70%;
    grid-template-rows: 1fr 1fr;
    margin-left: 7rem;
    margin-top: -4rem;
  
    border-radius: 40px;
    items-align:center;
   `
const Review = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    align-items:center;
    margin-bottom: 1rem;


    h3{
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
        text-align:center;
     }
    p {
        margin-top: -1rem;
        color: #3b3b3b;
        text-align:center;
    }
`

const ColumnTwo = styled.div`
display: grid;
background: linear-gradient(180deg,rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 0%,
rgba(0,0,0,0.1) -30%),
url(${ImageBg}) no-repeat center;
background-size:cover;
height: 400px;
width:70%;
grid-template-rows: 2fr 2fr;
margin-top: 2rem;
margin-left: 5rem;
border-radius:20px;
grid-gap: 10px;
@media screen and [max-width: 508px]{
grid-template-columns: 1fr;
border-radius: 40px;
    }
`
const ColumnThree = styled.div`
display: grid;
background: linear-gradient(180deg,rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 0%,
rgba(0,0,0,0.1) -30%),
url(${Image1Bg}) no-repeat center;
background-size:cover;
padding: 2rem;
height: 400px;
width: 70%;
grid-template-rows: 2fr 2fr;
margin-top: 2rem;
margin-left: 6rem;
border-radius:20px;
grid-gap: 30px;
@media screen and [max-width: 508px]{
grid-template-columns: 1fr;

    }
`
import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import styled from 'styled-components'
import KnowusBg from '../assets/Images/knowus.jpg'

const Knowus = () => {
    return (
        <Container>

            <Wrapper1>
                <Mission>
                    <IoMdCheckmarkCircleOutline
                        css={`color: #3fffa8;
                        font-size: 2rem;
                        margin-buttom:1 rem;
                        `}
                    />
                    <h3>Our mission</h3>
                    <p>
                        We designed and developed 'SheCabs' to safeguard the safety of
                        women traveling especially in, the working category, students, tourists, etc.
                        We also kept Women Drivers in our minds while designing this Service.
                        Cab Service that is driven 'for women by women ' will bring women drivers into the driver'
                        ecosystem. You are a woman who needs a cab or a woman driver looking for work. Contact us, SheCabs will be there for you.
                    </p>
                </Mission>

            </Wrapper1>
        </Container>

    )
}
export default Knowus


const Container = styled.div`
background: linear-gradient(180deg,rgba(0,0,0,0.5) 6%, rgba(0,0,0,0.5) 0%,
rgba(0,0,0,0.1) 10%),
    url(${KnowusBg}) no-repeat center;
    background-size:cover;
    width: 100%;
    height: 450px;
    padding: 5rem;
    margin-top: 0 1rem;
    margin-bottom: 0 1rem;
    border-radius: 250px;
`

const Wrapper1 = styled.div`

height:250px;
width:100%;
padding: 0 1rem;
color:#fcfcfc;
font-size: 50px;
display:flex;
justify-content:center;
align-items: center;
`

const Mission = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;
    align-items:center;

    h3{
        margin-bottom: 1rem;
        font-size: 0 2rem;
        font-style: italic;
        text-align:center;
     }
    p {
        margin-top: 2rem;
        color: #fffff;
        text-align:center;
        font-size: 26px;
    }
`

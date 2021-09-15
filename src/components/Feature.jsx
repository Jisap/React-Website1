import React from 'react'
import styled from 'styled-components'
import app from '../img/app.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display:flex;
    @media only screen and (max-width:480px){
        flex-direction: column;
        padding: 30px 20px;
    }
`
const Left = styled.div`
    width:50%;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const Image = styled.img`
    width:100%;
`

const Rigth = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    margin-top:30px;
    @media only screen and (max-width:480px){
        width: 100%;
    }
    
`
const Title = styled.span`
    font-size:70px;
    @media only screen and (max-width:480px){
        font-size: 50px;
    }
`
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top:30px;
`
const Desc = styled.p`
    font-size:20px;
    color: #777;
    margin-top:30px;
    
`
const Button = styled.button`
width: 150px;
border: none;
padding: 15px;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 20px;
margin-top: 20px;
cursor: pointer;
`

const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src = { app }/>
            </Left>
            <Rigth>
                <Title>
                    <b>good</b> design<br/>
                    <b>good</b> businnes
                </Title>
                <SubTitle>We know that good design means good businnes</SubTitle>
                <Desc>
                    We help our clients succed by creating brand identities, digital
                    experiences, and print materials that comunicate early, achieve marketing
                    goals, and look fantastic.
                </Desc>
                <Desc>
                    We care your business and guarantee you to achieve marketing goals.
                </Desc>
                <Button>Learn More</Button>
            </Rigth>
            <AnimatedShapes/>
        </Container>
    )
}



export default Feature

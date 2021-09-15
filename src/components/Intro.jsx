import React from 'react'
import styled from 'styled-components'
import woman from '../img/woman.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;

    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 57%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        width:100%;
        height:100%;
    }
`
const Title = styled.h1`
    width: 57%;
    font-size: 60px;
    @media only screen and (max-width:480px){
        width: 100%;
        font-size: 50px;
    }
    `
const Desc = styled.p`
    width: 57%;
    font-size: 20px;
    margin-top: 20px;
    @media only screen and (max-width:480px){
        width: 100%;
    }
    `
const Info = styled.div`
    width: 57%;
    margin-top: 50px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:480px){
        width: 100%;
        flex-direction:column;
    }

`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border:none;
    letter-spacing:2px;
    cursor: pointer;
    @media only screen and (max-width:480px){
        margin-bottom: 20px;
    }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

const Rigth = styled.div`
    width: 43%;
    display: flex;

    @media only screen and (max-width:480px){
        display: none;
    }
    
    `
const Phone = styled.span`
    color: #f0667d;
    font-weight: bold;
    margin-top: 5px;
`
const ContactText = styled.span`
    color: gray;
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
    `

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventure in creative age</Title>
                    <Desc>
                        We believe that designing products and services in close partnertship 
                        with our clients is the only way to hace real impact on their bussines
                    </Desc>
                    <Info>
                        <Button> START A PROJECT</Button>
                        <Contact>
                            <Phone>Call Us (012) 345 - 6789</Phone>
                            <ContactText>For any question or concern</ContactText>
                        </Contact>
                    </Info>
            </Left>
            
            <Rigth><Image src={ woman }/></Rigth>

            <AnimatedShapes />

        </Container>
    )
}

export default Intro

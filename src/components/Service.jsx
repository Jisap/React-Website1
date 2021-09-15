import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../img/How.png'
import MiniCard from './MiniCard'
import play from '../img/play.png'

const Container = styled.div`
    display:flex;
    height:100%;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const Right = styled.div`
    display:flex;
    align-items: center;
    width: 50%;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`
const Image = styled.img`
    display: ${ props => props.open && "none"}; /*Si la prop open es true no se muestra la imagen */
    max-width: 100%;
    width:100%;
    
`
const Video = styled.video`
    display: ${ props => !props.open && "none"}; /*Si la prop open es false no se muestra el video */
    height: 40em;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 8em;
    margin: auto;
    @media only screen and (max-width:480px){
        width: 155%;
        right:0;
    }
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:480px){
        padding: 20px;
        width: 100%;
    }

`
const Title = styled.h1`

`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`
const CardContainer = styled.div`
    display: flex;
    justify-content:space-between;
    margin-top: 50px;

`
const Button = styled.button`
    display: flex;
    align-items: center;
    width: 180px;
    border:none;border-radius: 10px;
    background-color:darkblue;
    color:white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    z-index:999;
`
const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`
const Modal = styled.div`
    width: 100vh;
    height: 100vh;
    position:absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`
const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: auto;
    top: auto;
`

const Service = () => {
    
    const [ open, setOpen ] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false ;

    return (
        <Container>
            <Left>
                <Image open = {open} src = { How }/>
                <Video open = {open} src="https://res.cloudinary.com/downe22q2/video/upload/v1630778502/pexels-tima-miroshnichenko-6170781_aphrzy.mp4"
                        autoPlay  
                        loop  
                        controls 
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>
                        Simple process to start
                    </Title>
                    <Desc>
                        We provide digital experience services to startups and small
                        businesses to lookin for a partner of their digital media, design &
                        development, lead generation and communications requirents. We work 
                        with you, not for you. Although we have a great resources.
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={ () => setOpen( true ) }>  {/* Establece open en true cuando se hace click en el boton */}
                        <Icon src={ play }/>How it works
                    </Button>
                </Wrapper>
            </Right>
            {/*Si la pantalla es pequeña y se pulso el boton de abrir se mostrará el modal */}
            { smallScreen && open && (  
                <Modal>
                    <Video open = {open} src="https://res.cloudinary.com/downe22q2/video/upload/v1630778502/pexels-tima-miroshnichenko-6170781_aphrzy.mp4"
                        autoPlay  
                        loop  
                        controls />
                    <CloseButton onClick = { () => setOpen(false) }>Close</CloseButton>   
                </Modal>
            )}
        </Container>
    )
}

export default Service

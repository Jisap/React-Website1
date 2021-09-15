import React from 'react'
import styled from 'styled-components'
import search from '../img/search.png'

const Container = styled.div`
    width: 100px;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 8px 10px 11px 6px rgba(0,0,0,0.36);
    -webkit-box-shadow: 8px 10px 11px 6px rgba(0,0,0,0.36);
    -moz-box-shadow: 8px 10px 11px 6px rgba(0,0,0,0.36);
    @media only screen and (max-width:480px){
        width: 50px;
    }
`
const Image = styled.img`
    width: 20px;
`
const Text = styled.span`
    margin-top: 10px;
    text-align: center;
    @media only screen and (max-width:480px){
        font-size: 14px;
    }
`

const MiniCard = () => {
    return (
        <Container>
            <Image src={ search }/>
            <Text>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet</Text>
        </Container>
    )
}

export default MiniCard

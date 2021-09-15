
import React from 'react'
import styled from 'styled-components'
import PriceCards from './PriceCards'

const Container = styled.div`
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
    `

const Price = () => {
    return (
        <Container>
            <PriceCards price="10" type="Basic" />
            <PriceCards price="20" type="Premium" />
            <PriceCards price="30" type="Advanced" />
        </Container>
    )
}

export default Price

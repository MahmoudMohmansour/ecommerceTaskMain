import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethoud from '../../components/checkout/choosePayMethod'


const ChoosePayMethoudPage = () => {
    return (
        <Container style={{minHeight:'670px'}}>
           <ChoosePayMethoud />
           
        </Container>
    )
}

export default ChoosePayMethoudPage
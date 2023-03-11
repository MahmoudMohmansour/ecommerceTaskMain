import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Pagination from '../../Components/Uitily/Pagination'
import UserSideBar from '../../components/User/UserSideBar'
import UserAddAddress from '../../components/User/UserAddAddress';
const UserAddAddressPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="4" xs="4" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="8" xs="8" md="9">
                  <UserAddAddress />
                </Col>
            </Row>
        </Container>
    )
}
export default UserAddAddressPage
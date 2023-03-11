import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import phone from "../../images/phone.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faCartShopping, faPhone,   } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-center ">
                        <div className="footer-shroot ">الشروط والاحكام</div>
                        <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
                        <div className="footer-shroot mx-2">اتصل بنا</div>
                    </Col>
                    <Col
                        sm="6"
                        className="d-flex justify-content-end align-items-center footer-end ">
                        <div className="d-flex pt-3 mx-2">
                        <FontAwesomeIcon className="footer-icon" icon={ faPhone}/>
                            <p className="footer-phone">01018949514</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                        <FontAwesomeIcon className="footer-icon" icon={ faFacebookF}/>
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                        <FontAwesomeIcon className="footer-icon" icon={ faTwitter}/>
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                        <FontAwesomeIcon className="footer-icon" icon={ faInstagram}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
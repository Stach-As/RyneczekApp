import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import contactImage from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        fistName: '',
        lastName: '',
        email: '',
        phone: '',
        message:''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:64274/contact", {
            metgod: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ succes: true, message: "Message sent successfully" })
        } else {
            setStatus({ succes: false, message: "Something went wrong, wonder what" }
            )
        }
    }

    return (
        <section className="contact" id="connect">
            <Container fluid>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} alt="formImage" />
                    </Col>
                    <Col md={6}>
                        <h2>Gen in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.fistName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="email" value={formDetails.email} placeholder="email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                    {
                                    status.message &&
                                    <Col>
                                        <p className={status.succes === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                    }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
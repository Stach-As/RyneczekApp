import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-mutli-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Umiejêtnoœci
                            </h2>
                            <p>PUT YOUR TEXT HERE</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={ } alt={image} />
                                    <h5>Web Develpoment</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt={image} />
                                    <h5>Grafika Wektorowa</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt={image} />
                                    <h5>Grafika Rastrowa</h5>
                                </div>
                                <div className="item">
                                    <img src={ } alt={image} />
                                    <h5>Rysunek</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
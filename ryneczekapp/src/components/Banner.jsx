import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/ryneczekLogo.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Brokulem", "Truskawka", "Ananasem", "Borowka"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [ text ])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Witaj na stronie Ryneczka Wedrowca !</span>
                        <h1>{'Dolacz do nas dzis i zostan : '}<span className="wrap">{text}</span></h1>
                        <p>Jestesmy klanem gromadzacy msie wokol looterShottera : Destiny 2, jednakze znamy sie jak kumple i czesto rowniez klocimy sie jak tacy. Oferujemy roznorodnych czlonok, aktywnych graczy i duzo, duzo zabawy</p>
                        <button onCLick={() => console.log("Odeslano od linka")}>Zajrzyj do nas! <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt='Header Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
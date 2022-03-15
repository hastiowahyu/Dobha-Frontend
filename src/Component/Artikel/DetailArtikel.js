import React from "react";
import { Row, Col } from "react-bootstrap";
import "./DetailArtikel.css";
import Card from "react-bootstrap/Card";

const DetailArtikel = () => {
  return (
    <div className='body-artikel'>
      <Row>
        <Col md={8}>sNGVSVgrkng</Col>
        <Col>
          <Card className='Card-Detail'>
            <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5lhHIanc6-WmSUziZZXRS41YiOAd10tiaw&usqp=CAU' className="img-card"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
          <Card className='Card-Detail'>
            <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5lhHIanc6-WmSUziZZXRS41YiOAd10tiaw&usqp=CAU' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
          <Card className='Card-Detail'>
            <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5lhHIanc6-WmSUziZZXRS41YiOAd10tiaw&usqp=CAU' />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DetailArtikel;

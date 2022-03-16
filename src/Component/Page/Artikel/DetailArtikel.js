import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./DetailArtikel.css";
import Card from "react-bootstrap/Card";

const DetailArtikel = () => {
  return (
    <div className='body-artikel'>
      <Row>
        <Col md={9}>
          <div className='konten'>
            <Container>
              <Card className='card-main'>
                <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5lhHIanc6-WmSUziZZXRS41YiOAd10tiaw&usqp=CAU' className='img-card-main' />
                <Card.Body>
                  <Card.Title className='title-card-main'>Buat Dirimu Lebih Anggun Dan Percaya Diri Dengan Parfum</Card.Title>
                  <Card.Text className='title-card-main'>
                    Perempuan identik dengan sifat yang anggun dan juga feminin. Selain karena pakaian atau penampilan, salah satu cara yang dapat kamu lakukan sebagai wanita agar terlihat lebih anggun dan percaya diri adalah dengan
                    menggunakan parfum yang tepat. Selain itu, banyak juga loh manfaat yang akan kamu dapatkan jika kamu dapat jika memiih parfum yang tepat untukmu. Manfaat Parfum untuk Wanita Rasa Percaya Diri Meningkat Sebagaimana dengan
                    judul dari artikel ini, parfum dapat membuat rasa percaya dirimu semakin meningkat. Parfum yang bagus akan menimbulkan aroma yang cocok untuk tubuhmu sehingga kamu tidak perlu takut timbul rasa tidak sedap di tubuhmu.
                    Oleh karena itu, sangat penting untuk kamu agar tidak sembarangan dalam memilih parfum, karena wangi parfum dapat mengubah rasa percaya diri kamu. Terlihat Menarik Menyambung pada poin sebelumnya, jika rasa percaya diri
                    kamu meningkat, kamu pun akan terlihat lebih menarik. Parfum dapat menarik perhatian seseorang hanya dari aromanya saja. Maka dari itu, kamu bisa langsung menarik perhatian orang-orang yang menghirup aroma parfummu,
                    apalagi jika aromanya pas dengan tubuhmu. Memperbaiki Mood Kamu Parfum bisa membuat mood jadi lebih baik dan akan membuat kamu menjadi lebih semangat loh! Hal ini karena aroma parfum yang tepat mampu menenangkan
                    pikiranmu. Ingat, aroma yang tepat ya. Karena jika aromanya terlalu pekat, parfum justru bisa membuat mood kamu terganggu. Aroma Parfum Apa Yang Cocok Untuk Wanita? Tadi kita sudah membahas bahwa manfaat-manfaat di atas
                    bisa kamu dapatkan jika kamu memilih aroma parfum yang tepat. Lantas apa saja sih aroma parfum yang tepat untuk wanita? Berikut aroma-aromanya: Aroma Rose Parfum beraroma bunga mawar atau rose banyak diminati orang
                    karena wanginya bisa memberi kesan segar dan juga elegan. Aroma mawar adalah salah satu jenis aroma yang paling umum dan mudah ditemukan dalam berbagai jenis parfum wanita. Selain bunganya yang cantik, aroma dari bunga
                    yang memiliki batang berduri ini juga dapat menyejukkan hatimu loh! Parfum dengan aroma rose sangat cocok kamu gunakan untuk pergi ke acara yang romatis, karena baunya bisa membuatmu terlihat lebih anggun. Dengan begitu
                    suasana di sekitarmu pun akan terasa lebih romantis pula. Parfum ini cocok kamu gunakan untuk ke acara pesta pernikahan, dan makan malam di tempat yang menyenangkan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </Col>
        <Col>
          <div className='style-artikel-terkait'>
            <h3>Artikel Terkait</h3>
            <Card className='Card-Detail'>
              <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5lhHIanc6-WmSUziZZXRS41YiOAd10tiaw&usqp=CAU' className='img-card' />
              <Card.Body>
                <Card.Title className='title-card'>Kegunaan Parfume Untuk Berbagai Acara</Card.Title>
              </Card.Body>
            </Card>
            <Card className='Card-Detail'>
              <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5lhHIanc6-WmSUziZZXRS41YiOAd10tiaw&usqp=CAU' className='img-card' />
              <Card.Body>
                <Card.Title className='title-card'>Kegunaan Parfume Untuk Berbagai Acara</Card.Title>
              </Card.Body>
            </Card>
            <Card className='Card-Detail'>
              <Card.Img variant='top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5lhHIanc6-WmSUziZZXRS41YiOAd10tiaw&usqp=CAU' className='img-card' />
              <Card.Body>
                <Card.Title className='title-card'>Kegunaan Parfume Untuk Berbagai Acara</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailArtikel;

import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import "./style.css"

export default function About() {
  return (
    <>
    <div className='container-md container-fluid'>
    <div className='content'>
      <Row className='row1'>
        <Col>
        <center>
        <h2>About Us</h2>
        </center>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row className='row2'>
        <Col>
        <center>
          <p>
          Apartemen adalah sebuah jenis hunian yang terdiri dari beberapa unit atau ruangan yang biasanya disewakan untuk ditinggali oleh individu atau keluarga. Apartemen umumnya memiliki beberapa fasilitas umum seperti kolam renang, taman, gym, dan ruang pertemuan. Sebagian besar apartemen berada di gedung bertingkat dan dilengkapi dengan lift dan tangga darurat. Tinggal di apartemen memiliki banyak keuntungan, salah satunya adalah lokasi yang strategis di pusat kota dengan akses mudah ke pusat perbelanjaan, restoran, dan tempat hiburan. Selain itu, keamanan di apartemen biasanya cukup baik karena dilengkapi dengan sistem keamanan dan penjaga keamanan 24 jam. Bagi orang yang ingin hidup praktis dan efisien, apartemen adalah pilihan hunian yang tepat.
          </p>
          <Button variant='outline-primary'>
            Get Started
          </Button>
        </center>
        </Col>
        <Col>
        <center>
        <img
        width={400} 
        src="https://cdn-icons-png.flaticon.com/512/3063/3063736.png" alt="" />
        </center>
        </Col>
      </Row>
    </div>
    </div>
    </>
    
  )
}

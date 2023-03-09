import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import {  Modal, Button  } from "react-bootstrap";

export default function Kartu({
  unit,
  description,
  price,
  interior,
  size,
  status,
  images,
  ratings,
  ids
}) {
  const stars = [];
  for (let i = 1; i <= ratings; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "red" }} />
    );
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row m-3 p-2 bg-white border rounded">
        <div className="align-items-center align-content-center row-md-3 p-2">
          <div className="row-md-6 mt-1">
            <img
              className="img-fluid img-responsive rounded product-image"
              alt="room img"
              src={images}
            />
          </div>
          <div className="row-md-6 mt-1">
            <h5>{unit}</h5>
            <div className="d-flex flex-row">
              <div className="ratings me-2">{stars}</div>
              <div></div>
              <span>{ratings}</span>
            </div>
            <div className="mt-1 mb-1 spec-1">
              <span className="dot">
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    fontSize: "10px",
                    color: "blue",
                  }}
                />
              </span>
              <span>{interior}</span>
              <span className="dot">
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    fontSize: "10px",
                    color: "blue",
                  }}
                />
              </span>
              <span>
                {size} m2
                <br />
              </span>
            </div>
            <p className="text-justify text-truncate para mb-0">
              {description}
              <br></br>
            </p>
          </div>
        </div>
        <div className="align-items-center align-content-center row-md-3 border-left mt-1">
          <div className="d-flex flex-column align-items-center">
            <h5 className="mr-1">IDR {price}</h5>
          </div>
          <h6 className="text-success d-flex flex-column align-items-center">
            {status}
          </h6>
          <div className="d-flex flex-column mt-4">
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={handleShow}
            >
              More detail
            </button>
            <button
              className="btn btn-outline-primary btn-sm mt-2"
              type="button"
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
      <Modal
        size="xl"
        backdrop="static"
        keyboard={false}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={images}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Informasi Deposit dan IPL</h5>
                  <div class="card-text">
                    o&nbsp;&nbsp;
                    <span class="card-text">
                      Estimasi IPL (Gratis untuk sewa bulanan)
                    </span>
                  </div>
                  <div class="card-text">
                    <small class="text-muted">
                      IDR 622,154 / bulan Indikasi dan tidak mengikat
                      (Dibayarkan langsung kepada Building Management)
                    </small>
                  </div>
                  <div class="card-text">
                    o&nbsp;&nbsp;
                    <span class="card-text">Deposit Bulanan</span>
                  </div>
                  <div class="card-text">
                    <small class="text-muted">
                      IDR 3,000,000.00&nbsp;&nbsp;
                    </small>                    
                  </div>
                  <div class="card-text">
                    o&nbsp;&nbsp;
                    <span class="card-text">Deposit Info</span>
                  </div>
                  <div class="card-text">
                    <small class="text-muted">
                      Untuk pemesanan harian, deposit menggunakan bank transfer
                      atau virtual account diestimasikan akan diterima kembali
                      oleh pelanggan dalam waktu paling lambat 5 hari kerja
                      setelah data bank terkonfirmasi. Pemberitahuan akan
                      dikirimkan ke email Anda setelah berhasil (pastikan
                      contact detail yang terdaftar aktif).
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

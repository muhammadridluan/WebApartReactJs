import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import axios from 'axios';


export default function Kartu({
  unit,
  description,
  price,
  interior,
  size,
  status,
  images,
  ratings,
  id
}) {
  const stars = [];
  for (let i = 1; i <= ratings; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "red" }} />
    );
  }

  // Function Delete
  const deleteDataById = (id) => {
    axios.delete(`http://127.0.0.1:1880/deleteById/${id}`)
      .then(() => {
        console.log('Data deleted successfully');
      })
      .catch((error) => {
        console.log('Error deleting data:', error);
      });
  };
  
  const handleClick = (e) => {
    const id = e.target.dataset.id;
    console.log(`The button ID is ${id}`)
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDataById(id)
        window.location.reload();
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  };



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
            <button className="btn btn-primary btn-sm" type="button">
              Rent
            </button>
            <Button type="button" variant="danger" className="mt-2" data-id={id} onClick={handleClick}>Delete</Button>
          </div>
        </div>
      </div>
    </>
  );
}

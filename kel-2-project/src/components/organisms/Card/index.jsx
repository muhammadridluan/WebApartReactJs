import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function Kartu({
  unit,
  description,
  price,
  interior,
  size,
  status,
  images,
  ratings,
}) {
  const stars = [];
  for (let i = 1; i <= ratings; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "red" }} />
    );
  }
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
            <button
              className="btn btn-outline-primary btn-sm mt-2"
              type="button"
            >
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

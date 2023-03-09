import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function Kartu() {
  return (
    <>
      <div className="row m-3 p-2 bg-white border rounded">
        <div className="align-items-center align-content-center row-md-3 p-2">
          <div className="row-md-6 mt-1">
            <img
              className="img-fluid img-responsive rounded product-image"
              alt="room img"
              src="https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/09/20160736/tipe-apartemen.jpg"
            />
          </div>
          <div className="row-md-6 mt-1">
            <h5>Luxury 1BR Severius ABC City Apartment</h5>
            <div className="d-flex flex-row">
              <div className="ratings mr-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <span>310</span>
            </div>
            <div className="mt-1 mb-1 spec-1">
              <span>100% cotton</span>
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
              <span>Light weight</span>
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
                Best finish
                <br />
              </span>
            </div>
            <div className="mt-1 mb-1 spec-1">
              <span>Unique design</span>
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
              <span>For men</span>
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
                Casual
                <br />
              </span>
            </div>
            <p className="text-justify text-truncate para mb-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.<br></br>
            </p>
          </div>
        </div>
        <div className="align-items-center align-content-center row-md-3 border-left mt-1">
          <div className="d-flex flex-column align-items-center">
            <h4 className="mr-1">IDR 3,024,990</h4>
          </div>
          <h6 className="text-success d-flex flex-column align-items-center">Fully Furnished</h6>
          <div className="d-flex flex-column mt-4">
            <button className="btn btn-primary btn-sm" type="button">
              Rent
            </button>
            <button className="btn btn-outline-primary btn-sm mt-2" type="button">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

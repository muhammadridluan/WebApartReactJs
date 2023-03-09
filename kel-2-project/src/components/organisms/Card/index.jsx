import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDotCircle } from "@fortawesome/free-solid-svg-icons";

export default function Kartu() {
  return (
    <>
      <div class="row m-3 p-2 bg-white border rounded">
        <div class="align-items-center align-content-center row-md-3 p-2">
          <div class="row-md-6 mt-1">
            <img
              class="img-fluid img-responsive rounded product-image"
              alt="room img"
              src="https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/09/20160736/tipe-apartemen.jpg"
            />
          </div>
          <div class="row-md-6 mt-1">
            <h5>Luxury 1BR Severius ABC City Apartment</h5>
            <div class="d-flex flex-row">
              <div class="ratings mr-2">
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />
              </div>
              <span>310</span>
            </div>
            <div class="mt-1 mb-1 spec-1">
              <span>100% cotton</span>
              <span class="dot">
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
              <span class="dot">
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
            <div class="mt-1 mb-1 spec-1">
              <span>Unique design</span>
              <span class="dot">
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
              <span class="dot">
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
            <p class="text-justify text-truncate para mb-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.<br></br>
            </p>
          </div>
        </div>
        <div class="align-items-center align-content-center row-md-3 border-left mt-1">
          <div class="d-flex flex-column align-items-center">
            <h4 class="mr-1">IDR 3,024,990</h4>
          </div>
          <h6 class="text-success d-flex flex-column align-items-center">Fully Furnished</h6>
          <div class="d-flex flex-column mt-4">
            <button class="btn btn-primary btn-sm" type="button">
              Rent
            </button>
            <button class="btn btn-outline-primary btn-sm mt-2" type="button">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

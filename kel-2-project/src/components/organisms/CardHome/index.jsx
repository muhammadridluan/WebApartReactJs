import React from "react";


export default function CardHome({ unit, price, interior, description, images }) {
  return (
    <div>
      <div className="col">
        {" "}
        <div className="card h-100 shadow-sm">
          <img
            src={images}
            className="card-img-top"
            alt="room images"
          />
          <div className="card-body">
            <div className="clearfix mb-3">
              {" "}
              <span className="float-start badge rounded-pill bg-primary">
                {interior}
              </span>{" "}
              <span className="float-end price-hp">IDR {price}</span>
            </div>
            <h4>{unit}</h4>
            <h5 className="card-title">{description}</h5>{" "}
            <div className="text-center my-4">
              {" "}
              <a href="/Login" className="btn btn-warning">
                Check offer
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

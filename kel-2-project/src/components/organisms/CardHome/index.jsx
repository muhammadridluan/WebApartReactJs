import React from "react";


export default function CardHome({ unit, price, interior, description }) {
  return (
    <div>
      <div className="col">
        {" "}
        <div className="card h-100 shadow-sm">
          <img
            src="https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/09/20160736/tipe-apartemen.jpg"
            className="card-img-top"
            alt="..."
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

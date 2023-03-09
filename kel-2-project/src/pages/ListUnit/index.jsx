
import React from "react";
import { Kartu } from "../../components";

export default function ListUnit() {
  return (
    <>
      <div className="container mt-5 mb-1">
        <div className="d-flex justify-content-center row">
          <div className="col-md-4">
            <Kartu/>            
          </div>
          <div className="col-md-4">
            <Kartu/>            
          </div>
          <div className="col-md-4">
            <Kartu/>            
          </div>
        </div>
      </div>
    </>
  );
}

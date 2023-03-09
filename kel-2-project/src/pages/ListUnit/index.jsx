
import React from "react";
import { Corousel, Kartu } from "../../components";

export default function ListUnit() {
  return (
    <>
    <Corousel></Corousel>
      <div class="container mt-5 mb-1">
        <div class="d-flex justify-content-center row">
          <div class="col-md-4">
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

import React from "react";
import { Kartu } from "../../components";

export default function ListUnit() {
  return (
    <>
      <div class="container mt-5 mb-1">
        <div class="d-flex justify-content-center row">
          <div class="col-md-4">
            <Kartu/>            
          </div>
          <div class="col-md-4">
            <Kartu/>            
          </div>
          <div class="col-md-4">
            <Kartu/>            
          </div>
        </div>
      </div>
    </>
  );
}

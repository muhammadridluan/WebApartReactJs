import React, { useEffect, useState } from "react";
import axios from "axios";
import { Corousel, Kartu } from "../../components";

export default function ListUnit() {
  const [data, setData] = useState([]);

  async function getUnits() {
    try {
      const response = await axios.get("http://localhost:1880/allRoom");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUnits();
  }, []);
  return (
    <>
      <Corousel></Corousel>
      <div className="container mt-5 mb-1">
        <div className="d-flex justify-content-center row">
          {data !== undefined &&
            data?.map((item, i) => (
              <div key={i} className="col-md-4">
                <Kartu
                  unit={item.unit}
                  price={item.price}
                  interior={item.interior}
                  description={item.description}
                  status={item.status}
                  size={item.size}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

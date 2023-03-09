import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardHome, Corousel } from "../../components/organisms";

export default function Home() {
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
      <div
        className="container-fluid bg-trasparent my-4 p-3"
        style={{ position: "relative" }}
      >
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {data !== undefined &&
            data
              ?.slice(0, 4)
              .map((item, i) => (
                <CardHome
                  key={i}
                  price={item.price}
                  unit={item.unit}
                  interior={item.interior}
                  description={item.description}
                  images={item.images}
                />
              ))}
        </div>
      </div>
    </>
  );
}

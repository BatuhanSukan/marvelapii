import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Card({ data }) {
  let navigate = useNavigate();

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <div
            className="card"
            key={item.id}
            onClick={() => navigate(`/${item.id}`)}
          >
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt="card"
            />
            <div className="title">
              <h3>{item.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
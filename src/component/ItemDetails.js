import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ItemDetails = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state);
  const item = data.find((item) => item.id === parseInt(id));

  return (
    <div className="item-details-container">
      <h2 className="item-details-title">{item.title}</h2>
      {item ? (
        <div className="item-details-content">
          <div className="item-details-text">
          <h3 className="">User Id :{item.userId}</h3>
            <p className="item-details-body">{item.body}</p>
          </div>
          <img
            src={`https://picsum.photos/200?random=${item.id}`}
            alt={item.title}
            className="item-details-image"
          />
        </div>
      ) : (
        <div>Item not found</div>
      )}
    </div>
  );
};

export default ItemDetails;

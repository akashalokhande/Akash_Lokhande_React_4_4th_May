import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./Actions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="card-container">
      {data.map((item) => (
        <Link to={`/item/${item.id}`} className="card" key={item.id}>
          <img
            src={`https://picsum.photos/200?random=${item.id}`}
            alt={item.title}
            className="card-image"
          />
          <h2 className="card-title">{item.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Home;

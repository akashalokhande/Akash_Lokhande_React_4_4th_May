import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./Actions";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div><Spinner/></div>;

  const truncateBody = (body) => {
    const maxLength = Math.round(body.length * 0.34); 
    return body.slice(0, maxLength); 
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <Link to={`/item/${item.id}`} className="card" key={item.id}>
          <img
            src={`https://picsum.photos/200?random=${item.id}`}
            alt={item.title}
            className="card-image"
          />
          <h2 className="">User Id :{item.userId}</h2>
          <h3 className="card-title">Title : {truncateBody(item.title)}</h3>
          <p>{truncateBody(item.body)}</p>
          <p>Read more...</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;

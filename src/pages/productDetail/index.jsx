import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const {  } = useLocation();
  //   console.log(.split("/").pop());

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div>
        <img src={data?.image} alt="" />
      </div>
      <div>Loading...</div>
    </div>
  );
};

export default ProductDetail;

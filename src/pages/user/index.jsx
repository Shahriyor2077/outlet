import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/users/${id}`)
        .then((res) => setData({ users: [res.data] }));
    } else {
      axios
        .get("https://dummyjson.com/users")
        .then((res) => setData(res.data));
    }
  }, [id]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.users?.map((food) => (
          <div key={food.id}>
            <div
              onClick={() => navigate(`/user/${food.id}`)}
              className="border rounded-2xl shadow-green-500 hover:shadow-2xl cursor-pointer overflow-hidden bg-white transition"
            >
              <img
                src={food.image}
                width={300}
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="text-green-500 font-bold  text-center">
              <h3>{food.firstName}</h3>
              <p className="text-green-700    ">{food.lastName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

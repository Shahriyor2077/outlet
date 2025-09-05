// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./home";
// import User from "./user";
// import Login from "./login";
// import MainLaylout from "./layout";
// import ProductDetail from "./productDetail";

// const AppRouter = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<MainLaylout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/home/:id" element={<Home />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/user/:id" element={<User />} />
//           <Route path="*" element={<div>404</div>} />
//           <Route path="product/:id" element={<ProductDetail />} />
//         </Route>
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </>
//   );
// };

// export default AppRouter;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import User from "./user";
import Login from "./login";
import MainLayout from "./layout";
import ProductDetail from "./productDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="user/:id" element={<User />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;

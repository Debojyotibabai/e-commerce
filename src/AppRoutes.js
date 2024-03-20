import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./app/pages/Home/index.jsx";

const AppRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

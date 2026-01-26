import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import CarGameComponent from "./Container/CarGameComponent.tsx";
import PostApiComponent from "./Container/PostApiComponent.tsx";

export const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/CarGame" element={<CarGameComponent />} />
          <Route path="/PostApi" element={<PostApiComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

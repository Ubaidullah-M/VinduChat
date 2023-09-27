import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing my component
import Login from "./login";
import Register from "./Register";
import ForgetPassWord from "./ForgetPassWord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassWord />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

// document.addEventListener("DOMContentLoaded", function () {
//   const rootElement = document.getElementById("app"); // Replace "app" with the ID of your target container
//   ReactDOM.createRoot(rootElement).render(<ExampleComponent />);
// });
